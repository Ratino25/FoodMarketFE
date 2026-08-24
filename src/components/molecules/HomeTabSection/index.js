import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '../../molecules';
import { foodDummy1, foodDummy2, foodDummy3 } from '../../../assets';

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
            renderLabel={({ route, focused, color }) => {
                return (
                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            color: focused ? '#020202' : '#8D92A3',
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
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white' }}>
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
                <ItemListFood image={foodDummy3} />
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
                <ItemListFood image={foodDummy3} />
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
            </View>
        </ScrollView>
    )
}

const Popular = () => {
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white' }}>
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
                <ItemListFood image={foodDummy3} />
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
                <ItemListFood image={foodDummy3} />
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
            </View>
        </ScrollView>
    )
}

const Recommended  = () => {
     return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8, paddingHorizontal: 24, backgroundColor: 'white' }}>
                <ItemListFood image={foodDummy1} />
                <ItemListFood image={foodDummy2} />
                <ItemListFood image={foodDummy3} />
                
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
        />

    )
}

export default HomeTabSection;

const styles = StyleSheet.create({})