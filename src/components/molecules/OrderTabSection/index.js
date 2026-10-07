import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInProgress, getPastOrders, getPostOrders } from '../../../redux/action';

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
    const dispatch = useDispatch();
    const { inProgress } = useSelector(state => state.orderReducer)
    useEffect(() => {
        dispatch(getInProgress())
    }, [dispatch]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                {inProgress.map(order => {
                    return (
                        <ItemListFood
                            key={order.id}
                            // rating={order.food.rate}
                            image={{ uri: order.food.picturePath }}
                            onPress={() => navigation.navigate('OrderDetail', order)}
                            inProgress={true}
                            items={order.quantity}
                            price={order.total}
                            type="in-progress"
                            name={order.food.name}
                        />
                    )

                })}

                {/* <ItemListFood
                    rating={3}
                    image={foodDummy1}
                    onPress={() => navigation.navigate('OrderDetail')}
                    inProgress={true}
                    items={3}
                    price="150.000"
                    type="in-progress"
                    name="Soup Ayam"
                />
                <ItemListFood
                    rating={3}
                    image={foodDummy1}
                    onPress={() => navigation.navigate('OrderDetail')}
                    inProgress={true}
                    items={3}
                    price="150.000"
                    type="in-progress"
                    name="Soup Ayam"
                    status="Cancle"
                /> */}

            </View>
        </ScrollView>
    )
}

const PastOrders = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { pastOrders } = useSelector(state => state.orderReducer)
    useEffect(() => {
        dispatch(getPastOrders())
    }, [dispatch]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                {pastOrders.map(order => {
                    return (
                        <ItemListFood
                            key={order.id}
                            image={{uri: order.food.picturePath}}
                            onPress={() => navigation.navigate('OrderDetail', order)}
                            items={order.quantity}
                            type="past-orders"
                            name={order.food.name}
                            price={order.total}
                            date={order.created_at}
                            status={order.status}
                        />
                    )
                })}
                {/* <ItemListFood
                    rating={3}
                    image={foodDummy1}
                    onPress={() => navigation.navigate('OrderDetail')}
                    items={1}
                    type="past-orders"
                    name="Soup Ayam"
                    price="150.000"
                    date="2023-10-10"
                    status="Selesai"
                /> */}

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