import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';

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

const Account = () => {
    const navigation = useNavigation();
    const signOut = () => {
        AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
        });
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListMenu text="Edit Profile"/>
                <ItemListMenu text="Home Address" />
                <ItemListMenu text="Security"/>
                <ItemListMenu text="Payments" />
                <ItemListMenu text="SignOut" onPress={signOut} />

            </View>
        </ScrollView>
    )
}

const FoodMarket = () => {
    const navigation = useNavigation();
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1 }}>
                <ItemListMenu text="Rate App" />
                <ItemListMenu text="Help Center" />
                <ItemListMenu text="Privacy & Policy" />
                <ItemListMenu text="Term & Conditions" />
            </View>
        </ScrollView>
    )
}


const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,    
});

const ProfileTabSection = ({ title, type, onPress }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'FoodMarket' },
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

export default ProfileTabSection;

const styles = StyleSheet.create({})