import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { paddingTop: 30, paddingHorizontal: 24, paddingBottom: 24, backgroundColor: "#FFFFFF" },
  title: { fontSize: 20, fontFamily: "Poppins-Medium", color: "#020202" },
  subtitle: { fontSize: 14, fontFamily: "Poppins-Light", color: "#8D92A3" },
})