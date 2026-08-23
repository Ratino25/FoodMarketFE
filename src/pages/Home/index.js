import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { foodDummy1, foodDummy2, foodDummy3, profileDummy } from '../../assets';
import { FoodCard, Gap, HomeTabSection } from '../../components';


const Home = () => {
    

    return (
        <View style={styles.page} >
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName} >Food Market</Text>
                    <Text style={styles.desc} >Les's get some foods</Text>
                </View>
                <Image source={profileDummy} style={styles.profile} />
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.foodCardContainer} >
                        <Gap width={24} />
                        <FoodCard image={foodDummy1} />
                        <FoodCard image={foodDummy2} />
                        <FoodCard image={foodDummy3} />
                        {/* <Gap width={24} /> */}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.tabContainer} >
                <HomeTabSection />
            </View>

        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
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
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 24,
    },
    tabContainer: {
        flex: 1,
    }

})