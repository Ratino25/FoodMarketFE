import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, TextInput, Button, Gap } from '../../components';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const onSubmit =() => {
            console.info("Email : ", email);
            console.info("Password : ", password);  
        }
    return (
        <View style={styles.page}>
            <Header title="Sign In" subtitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput 
                    label="Email Address" 
                    placeholder="Enter your email" 
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <Gap height={16} />
                <TextInput 
                    label="Password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry 
                />
                <Gap height={24} />
                <Button 
                    text="Sign In" 
                    onPress={onSubmit}
                />
                <Gap height={12} />
                <Button 
                    text="Create New Account" 
                    color="#8D92A3" 
                    textColor="#FFFFFF"
                     onPress={() => navigation.navigate('SignUp')} />
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