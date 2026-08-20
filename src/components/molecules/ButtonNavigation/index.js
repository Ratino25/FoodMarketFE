import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
import { IcHomeOn, IcOrderOn, IcProfileOn, IcProfileOff, IcHomeOff, IcOrderOff } from '../../../assets';

const Icon = ({ label, focused }) => {
    switch (label){
        case "Home":
            return focused ? <IcHomeOn/> : <IcHomeOff/>
        case "Order":
            return focused ? <IcOrderOn/> : <IcOrderOff/>
        case "Profile":
            return focused ? <IcProfileOn/> : <IcProfileOff/>
        default:
            <IcOrderOn/>
    }
}

const ButtonNavigation = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={sytles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Icon label={label} focused={isFocused} />
                        {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default ButtonNavigation;

const sytles = StyleSheet.create({
    container: { 
            flexDirection: 'row',
            backgroundColor:"white",
            paddingTop: 15,
            paddingBottom: 13,
            paddingHorizontal: 60,
            justifyContent: 'space-between',
         }
})