import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, TextInput, Button, Gap } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../utils';

const SignUp = ({ navigation }) => {
    const [form, setform] = useForm({
        name: '',
        email: '',
        password: '',

    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form: ', form);
        dispatch({
            type: "SET_REGISTER",
            value: form
        })
        navigation.navigate('SignUpAddress')
    }



    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} >
            <View style={styles.page}>
                <Header title="Sign Up" subtitle="Create your account" onBack={() => navigation.goBack('SignIn')} />
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <View style={styles.boderPhoto}>
                            <View style={styles.photoContainer}>
                                <Text style={styles.addPhoto}>Add Photo</Text>
                            </View>
                        </View>
                    </View>
                    <TextInput
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChangeText={(value) => setform('name', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Email Address"
                        placeholder="Enter your email"
                        value={form.email}
                        onChangeText={(value) => setform('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Password" placeholder="Enter your password"
                        value={form.passwrod}
                        onChangeText={(value) => setform('password', value)}
                        secureTextEntry
                    />
                    <Gap height={24} />
                    <Button
                        text="Continue"
                        // onPress={() => navigation.navigate('SignUpAddress')} 
                        onPress={onSubmit}

                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;

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
    photo: {
        alignItems: "center",
        marginTop: 26,
        marginBottom: 16,
    },
    boderPhoto: {
        borderWidth: 1,
        borderColor: "#8D92A3",
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center"
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: "#F0F0F0",
        padding: 24,

    },
    addPhoto: {
        fontSize: 14,
        fontFamily: "Poppins-Light",
        color: "#8D92A3",
        textAlign: "center",
    }

})