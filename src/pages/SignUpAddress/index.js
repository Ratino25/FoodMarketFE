import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, TextInput, Button, Gap, Select } from '../../components';
import { useForm } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    });

    const dispatch = useDispatch();
    const registerReducer = useSelector(state => state.registerReducer)

    const onSubmit = () => {
        console.log("form: ", form);
        // dispatch({
        //     type: "SET_ADDRESS",
        //     value: form
        // });
        const data = {
            ...form,
            ...registerReducer
        }
        console.log("register reducer ", data);
        // navigation.navigate('SuccessSignUp')
    }
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
                    onPress={onSubmit()} />

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