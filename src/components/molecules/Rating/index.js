import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IcStarOff, IcStarOn } from "../../../assets";

const Rating = () => {
    return (
        <View style={styles.ratingContainer} >
            <View style={styles.startContainer} >
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOff />
            </View>
            <Text>4.5</Text>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
     ratingContainer: {
        flexDirection: 'row',
    },
    startContainer: {
        flexDirection: 'row',

    }
})