import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, TextInput, Button, Gap } from '../../components';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" subtitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput label="Email Address" placeholder="Enter your email" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Enter your password" />
                <Gap height={24} />
                <Button text="Sign In" />
                <Gap height={12} />
                <Button text="Create New Account" color="#8D92A3" textColor="#FFFFFF" />
            </View>

        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { 
        paddingTop: 26, 
        paddingHorizontal: 24, 
        paddingBottom: 26, 
        marginTop: 24, 
        flex: 1, 
        backgroundColor: "#ffffff" },
})