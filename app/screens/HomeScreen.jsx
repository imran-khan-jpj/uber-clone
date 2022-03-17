import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.contianer}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
