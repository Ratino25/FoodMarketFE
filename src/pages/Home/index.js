import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {getFoodData} from '../../redux/action/home';


const Home = () => {
    const { height } = useWindowDimensions();

    const dispatch = useDispatch();
    const {food} = useSelector((state) => state.homeReducer); 

    useEffect(() => {
        dispatch(getFoodData());
    })

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
                        {food.map((itemFood) => {
                            return (
                                <FoodCard name={itemFood.name} image={{uri: itemFood.picturePath}} rating={itemFood.rate} />        
                            )
                        })}
                        
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