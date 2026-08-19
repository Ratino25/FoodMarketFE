import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, TextInput, Button, Gap, Select } from '../../components';

const SignUpAddress = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Address" subtitle="Make sure it's valid" onBack={() => navigation.goBack('SignIn')} />
            <View style={styles.container}>
                
                <TextInput label="Phone Number" placeholder="Enter your phone number " />
                <Gap height={16} />
                <TextInput label="Address" placeholder="Enter your address" />
                <Gap height={16} />
                <TextInput label="House No." placeholder="Enter your house number" />
                <Gap height={24} />
                <Select label="City" />
                <Gap height={24} />
                <Button text="Sign Up Now" />

            </View>

        </View>
    )
}

export default SignUpAddress;

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        paddingTop: 26,
        paddingHorizontal: 24,
        paddingBottom: 26,
        marginTop: 24,
        flex: 1,
        backgroundColor: "#ffffff"
    },


})