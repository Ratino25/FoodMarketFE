import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Header, TextInput, Button, Gap, Select } from '../../components';
import { useForm } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    });

    const dispatch = useDispatch();
    const registerReducer = useSelector(state => state.registerReducer);

    const onSubmit = () => {
        console.log("form: ", form);
        const data = {
            ...registerReducer,
            ...form
        };
        console.log("register reducer ", data);

        dispatch({ type: "SET_LOADING", value: true });
        const apiHost = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';

        axios.post(`http://${apiHost}:8000/api/register`, data, {
            timeout: 10000,
        })
            .then(res => {
                console.log('data success: ', res.data);
                showToast("Register success", 'success');
                navigation.navigate('SuccessSignUp');
            })
            .catch(err => {
                console.log('register error: ', err);
                const isTimeout = err.code === 'ECONNABORTED' || err.code === 'ETIMEDOUT';
                const message = isTimeout
                    ? 'Koneksi timeout. Silakan coba lagi.'
                    : err?.response?.data?.message || err?.message || 'Registrasi gagal';
                showToast(message, 'danger');
            })
            .finally(() => {
                dispatch({ type: "SET_LOADING", value: false });
            });
    };

    const showToast = (message, type = 'danger') => {
        showMessage({
            message: message,
            type: type === 'success' ? 'success' : 'danger',
            backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E'
        });
    };
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} >
        <View style={styles.page}>
            <Header title="Address" subtitle="Make sure it's valid" onBack={() => navigation.navigate('SignIn')} />
            <View style={styles.container}>
                
                <TextInput 
                    label="Phone Number" 
                    placeholder="Enter your phone number " 
                    value={form.phoneNumber}
                    onChangeText={(value) => setForm('phoneNumber', value)}   
                />
                <Gap height={16} />
                <TextInput 
                    label="Address" 
                    placeholder="Enter your address" 
                    value={form.address}
                    onChangeText={(value) => setForm('address', value)}
                />
                <Gap height={16} />
                <TextInput 
                    label="House No." 
                    placeholder="Enter your house number" 
                    value={form.houseNumber}
                    onChangeText={(value) => setForm('houseNumber', value)}    
                />
                <Gap height={24} />
                <Select 
                    label="City" 
                    value={form.city}
                    onSelectChange={(value) => setForm('city', value)}    
                />
                <Gap height={24} />
                <Button 
                    text="Sign Up Now" 
                    onPress={onSubmit} />

            </View>

        </View>
        </ScrollView>
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
