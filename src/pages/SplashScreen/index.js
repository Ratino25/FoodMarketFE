import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = () => {
    return (
        <View>
            <Logo />
            <Text>FoodMarket</Text>
        </View>
    );
};

export default SplashScreen;