import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, ItemListFood, ItemValue } from "../../components";
import { foodDummy1 } from "../../assets";

const OrderDetail = ({ navigation }) => {
    return(
        <ScrollView>
            <Header title="Payment" subtitle="You deserve better meal" onBack={() => {}} />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood type="order-summary" name="Soup Ayam" price="150.000" items={14} image={foodDummy1} />
                <Text style={styles.label} >Details Transaction</Text>
                <ItemValue label="Cherry" value="IDR 18.000" />
                <ItemValue label="Drive" value="IDR 5000" />
                <ItemValue label="Tax 10%" value="IDR 1000" />
                <ItemValue label="Total Price" value="IDR 100.000" valueColor="#1ABC9C" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Delivery to: </Text>
                <ItemValue label="Name" value="Ration" />
                <ItemValue label="Phone No" value="08673534507" />
                <ItemValue label="Address" value="Cinere" />
                <ItemValue label="House No" value="A5" />
                <ItemValue label="City" value="Depok" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Order Status: </Text>                
                <ItemValue label="#FM209214" value="Depok" valueColor="#1ABC9C" />
            </View>
            <View style={styles.button}>
                <Button text="Cancel My Order" onPress={() => navigation.replace('SuccessOrder')} color="#D9435E" textColor="white" />
            </View>

            <Gap height={40} />

        </ScrollView>
    )
}

export default OrderDetail;

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