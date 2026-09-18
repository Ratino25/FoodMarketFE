import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IcStarOff, IcStarOn } from "../../../assets";

const Rating = ({ number }) => {
    const renderStart = () => {
        let start = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= number) {
                start.push(<IcStarOn />)
            } else {
                start.push(<IcStarOff />)
            }

        }
        return start;
    }
    return (
        <View style={styles.ratingContainer} >
            <View style={styles.startContainer} >
                {renderStart()}
                {/* <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOff /> */}
            </View>
            <Text>{number}</Text>
        </View>
    )
}

export default Rating;

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    startContainer: {
        flexDirection: 'row',
        marginRight: 4,

    }
})