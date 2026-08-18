import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IcBack } from "../../../assets";

const Header = (props) => {
  const { title, subtitle, onBack } = props;
  return (
    <View style={styles.container}>
      {
        onBack && (
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.back}>
              <IcBack />
            </View>
          </TouchableOpacity>
        )
      }

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center"
  },
  title: { fontSize: 20, fontFamily: "Poppins-Medium", color: "#020202" },
  subtitle: { fontSize: 14, fontFamily: "Poppins-Light", color: "#8D92A3" },
  back: {

    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  }
})