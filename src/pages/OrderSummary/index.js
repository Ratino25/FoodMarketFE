import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, ItemListFood, ItemValue } from '../../components';
import { foodDummy1 } from '../../assets';

const OrderSummay = () => {
    return(
        <View>
            <Header title="Payment" subtitle="You deserve better meal" onBack={() => {}} />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood image={foodDummy1} items={14} />
                <Text style={styles.label} >Details Transaction</Text>
                <ItemValue label="Cherry" value="IDR 18.000" />
                <ItemValue label="Drive" value="IDR 5000" />
                <ItemValue label="Tax 10%" value="IDR 1000" />
                <ItemValue label="Total Price" value="IDR 100.000" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Delivery to: </Text>
                <ItemValue label="Name" value="Ration" />
                <ItemValue label="Phone No" value="08673534507" />
                <ItemValue label="Address" value="Cinere" />
                <ItemValue label="House No" value="A5" />
                <ItemValue label="City" value="Depok" />
            </View>
            <View style={styles.button}>
                <Button text="Checkout" />
            </View>

        </View>
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