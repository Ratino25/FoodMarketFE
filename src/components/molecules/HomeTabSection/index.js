import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '../../molecules';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const renderTabBar = (props) => {
    return (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: '#020202',
                height: 3,
                width: '15%',
                marginLeft: '3%',
            }}
            style={{
                backgroundColor: 'white',
            }}
            tabStyle={{
                width: 'auto',
            }}
            activeColor="#020202"
            inactiveColor="#8D92A3"
            renderLabel={({ route, color }) => {
                return (
                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            color,
                        }}
                    >
                        {route.title}
                    </Text>
                );
            }}
        />
    );
};

const NewTaste = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood type="product" name="New Taste 1" price="10.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 2" price="15.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 3" price="20.000" rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 4" price="25.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 5" price="30.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 6" price="35.000" rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 7" price="40.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="New Taste 8" price="45.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            </View>
        </ScrollView>
    )
}

const Popular = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood type="product" name="Popular  1" price="10.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 2" price="15.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 3" price="20.000" rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 4" price="25.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 5" price="30.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 6" price="35.000" rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 7" price="40.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Popular 8" price="45.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            </View>
        </ScrollView>
    )
}

const Recommended  = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood type="product" name="Recommended 1" price="50.000" rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Recommended 2" price="55.000" rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood type="product" name="Recommended 3" price="60.000" rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                
            </View>
        </ScrollView>
    )
}

const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
});

const HomeTabSection = ({ title, type, onPress }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    return (

        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            backgroundColor="white"
        />

    )
}

export default HomeTabSection;

const styles = StyleSheet.create({})