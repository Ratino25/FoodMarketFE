import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IlSuccessOrder } from "../../assets";
import { Button } from "../../components";

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder />
            <Text style={styles.title}>You've Made Order</Text>
            <Text style={styles.subtitle}>Just stay at home while we are</Text>
            <Text style={styles.subtitle}>Preparing your best foods</Text>
            <View style={styles.buttonContainer}>
                <Button text="Order Other Foods" onPress={() => navigation.replace('MainApp')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button text="View My Order" onPress={() => navigation.replace('MainApp')} 
                color="#8D92A3"
                textColor="white" />
            </View>

        </View>
    )
}

export default SuccessOrder;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 22,
        fontFamily: "Poppins-Regular",
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8D92A3",
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 80,
        marginTop: 20,
    }
})