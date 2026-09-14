import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { setLoading, singUpAction } from '../../redux/action';
import { useForm } from '../../utils';

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    });

    const dispatch = useDispatch();
    const { registerReducer, photoReducer } = useSelector(state => state);

    const onSubmit = () => {
        console.log("form: ", form);
        const data = {
            ...registerReducer,
            ...form
        };
        console.log("register reducer ", data);

        dispatch(setLoading(true));

        dispatch(singUpAction(data, photoReducer, navigation));

        
    };


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.page}>
                <Header title="Address" subtitle="Make sure it's valid" onBack={() => navigation.goBack()} />
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
