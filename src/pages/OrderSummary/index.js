import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Header, ItemListFood, ItemValue, Loading } from '../../components';
import { foodDummy1 } from '../../assets';
import { Axios } from 'axios';
import { API_HOST } from '../../config';
import { WebView } from 'react-native-webview';
import { getData } from '../../utils';

const OrderSummay = ({ navigation, route }) => {
    const { item, transaction, userProfile } = route.params;
    const [token, setToken] = useState('');
    const [isPaymentOpen, setIsPayment] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState("https://google.com");


    useEffect(() => {
        getData("token").then((res) => {
            setToken(res.value);
        })
    }, [])

    const onCheckOut = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: "PENDING"
        };
        console.log('checkout data: ', token);
        Axios.post(`${API_HOST.url}/checkout`, data, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            console.log('success checkout: ', res.data);

            setIsPayment(true);
            setPaymentUrl(res.data.data.paymentUrl);
        })
        .catch(err => {
            console.log('error checkout: ', err);

            console.log('response:', err.response);
            console.log('response data:', err.response?.data);
            console.log('status:', err.response?.status);
            console.log('message:', err.message);
        });
    }

    
    
    const onNavChange = (state) => {
        console.log('nav state change: ', state);
        const urlSuccess = 'http://foodmarket-backend.buildwithangga.id/midtrans/success';
        const title = "Laravel";
        if(state.title === title){
            navigation.replace('SuccessOrder');
        }
    }

    if (isPaymentOpen) {
        return (
            <>
                <Header title="Payment" subtitle="You deserve better meal" onBack={() => setIsPayment(false)} />
                <WebView
                    source={{ uri: paymentUrl }}
                    startInLoadingState={true}
                    renderLoading={() => <Loading />}
                // onNavigationStateChange={(state) => console.log('nav state change: ', state)} // debugging purpose
                    onNavigationStateChange={onNavChange}
                />
            </>

        )
    }



    return (
        <ScrollView>
            <Header title="Order Summary" subtitle="You deserve better meal" onBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood
                    type="order-summary"
                    name={item.name}
                    price={item.price}
                    items={transaction.totalItem}
                    image={{ uri: item.picturePath }}
                />
                <Text style={styles.label} >Details Transaction</Text>
                <ItemValue label={item.name} value={transaction.totalPrice} type="currency" />
                <ItemValue label="Drive" value={transaction.driver} type="currency" />
                <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
                <ItemValue label="Total Price" value={transaction.total} type="currency" valueColor="#1ABC9C" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Delivery to: </Text>
                <ItemValue label="Name" value={userProfile.name} />
                <ItemValue label="Phone No" value={userProfile.phoneNumber} />
                <ItemValue label="Address" value={userProfile.address} />
                <ItemValue label="House No" value={userProfile.houseNumber} />
                <ItemValue label="City" value={userProfile.city} />
            </View>
            <View style={styles.button}>
                <Button text="Checkout"
                    // onPress={() => navigation.replace('SuccessOrder')} />
                    onPress={onCheckOut} />
            </View>
            <Gap height={40} />
        </ScrollView>
    )
}

export default OrderSummay;

const styles = StyleSheet.create({
    content: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24

    },
    label: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#020202",
        marginBottom: 8,

    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24
    }
})