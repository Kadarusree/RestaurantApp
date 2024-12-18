import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const LauncherScreen = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.childContainers}>
        <View style={styles.grandChild}></View>
        <View style={styles.grandChild}></View>
      </View>
      <View style={styles.childContainers}>
        <View style={styles.grandChild}></View>
        <View style={styles.grandChild}></View>
      </View>
      <View style={styles.childContainers}>
        <View style={styles.grandChild}></View>
        <View style={styles.grandChild}></View>
      </View>
      <View style={styles.childContainers}>
        <View style={styles.grandChild}></View>
        <View style={styles.grandChild}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
  },

  childContainers: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginBottom: 1,
    backgroundColor: "yellow",
  },

  grandChild: {
    flex: 1,
    height: "100%",
    backgroundColor: "green",
    margin: 1,
  },
});

export default LauncherScreen;
