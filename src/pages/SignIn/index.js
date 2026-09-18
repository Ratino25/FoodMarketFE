import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Header, TextInput, Button, Gap } from '../../components';
import { getData, useForm } from '../../utils';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoading, signInAction } from '../../redux/action';

const SignIn = ({ navigation }) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    

    const onSubmit = () => {
        
        dispatch(signInAction(form, navigation));
    }
    return (
        <View style={styles.page}>
            <Header title="Sign In" subtitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput
                    label="Email Address"
                    placeholder="Enter your email"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
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
        backgroundColor: "#ffffff"
    },
})
