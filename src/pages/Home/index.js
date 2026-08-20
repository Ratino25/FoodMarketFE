import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { profileDummy } from '../../assets';

const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName} >Food Market</Text>
                    <Text style={styles.desc} >Les's get some foods</Text>
                </View>
                <Image source={profileDummy} style={styles.profile} />
            </View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    
})