import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '..';
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

const InProgress = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={3} price="150.000" type="in-progress" name="Soup Ayam" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={2} price="100.000" type="in-progress" name="Nasi Goreng" />
                <ItemListFood rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={1} price="50.000" type="in-progress" name="Mie Goreng" />
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={4} price="200.000" type="in-progress" name="Sate Ayam" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={2} price="100.000" type="in-progress" name="Gado-Gado" />
                <ItemListFood rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={3} price="150.000" type="in-progress" name="Nasi Padang" />
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={1} price="50.000" type="in-progress" name="Soup Ayam" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} inProgress={true} items={2} price="100.000" type="in-progress" name="Nasi Goreng" />
            </View>
        </ScrollView>
    )
}

const PastOrders = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} items={1} type="past-orders" name="Soup Ayam" price="150.000" date="2023-10-10" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} items={2} type="past-orders" name="Nasi Goreng" price="100.000" date="2023-10-09" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} items={1} type="past-orders" name="Mie Goreng" price="50.000" date="2023-10-08" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} items={4} type="past-orders" name="Sate Ayam" price="200.000" date="2023-10-07" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} items={2} type="past-orders" name="Gado-Gado" price="100.000" date="2023-10-06" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy3} onPress={() => navigation.navigate('FoodDetail')} items={3} type="past-orders" name="Nasi Padang" price="150.000" date="2023-10-05" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy1} onPress={() => navigation.navigate('FoodDetail')} items={1} type="past-orders" name="Soup Ayam" price="150.000" date="2023-10-04" status="Selesai" />
                <ItemListFood rating={3} image={foodDummy2} onPress={() => navigation.navigate('FoodDetail')} items={2} type="past-orders" name="Nasi Goreng" price="150.000" date="2023-10-04" status=""  />
            </View>
        </ScrollView>
    )
}


const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,    
});

const OrderTabSection = ({ title, type, onPress }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
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

export default OrderTabSection;

const styles = StyleSheet.create({})