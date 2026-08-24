import React from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';


const Home = () => {
    const { height } = useWindowDimensions();

    return (
        <ScrollView
            style={styles.page}
            contentContainerStyle={styles.contentContainer}
            nestedScrollEnabled
        >
            <HomeProfile />
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

            <View style={[styles.tabContainer, { height: height * 0.65 }]} >
                <HomeTabSection />
            </View>

        </ScrollView>
        
    )
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
    contentContainer: {
        flexGrow: 1,
    },
    
    
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 24,
    },
    tabContainer: {
        minHeight: 400,
    }

})