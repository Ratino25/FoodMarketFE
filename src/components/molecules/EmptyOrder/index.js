import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IlEmptyOrder } from "../../../assets";
import { Button } from "../../atoms";
import { useNavigation } from "@react-navigation/native";

const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <IlEmptyOrder />
            <Text style={styles.title}>Yeay Complete</Text>
            <Text style={styles.subtitle}>Your order has been completed!</Text>
            <Text style={styles.subtitle}>Some food as a self-reward!</Text>
            <View style={styles.buttonContainer}>
                <Button text="Find Foods" onPress={() => navigation.replace('MainApp')} />
            </View>

        </View>
    )
}

export default EmptyOrder;

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