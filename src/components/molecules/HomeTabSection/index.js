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
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            </View>
        </ScrollView>
    )
}

const Popular = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            </View>
        </ScrollView>
    )
}

const Recommended  = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
                <ItemListFood image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
                
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