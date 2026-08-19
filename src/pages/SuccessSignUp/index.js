import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IlSuccessSignUp } from "../../assets";
import { Button } from "../../components";

const SuccessSignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp />
            <Text style={styles.title}>Success Sign Up</Text>
            <Text style={styles.subtitle}>Your account has been created successfully!</Text>
            <View style={styles.buttonContainer}>
                <Button text="Find Foods" onPress={() => navigation.replace('MainApp')} />
            </View>

        </View>
    );
}

export default SuccessSignUp;

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
