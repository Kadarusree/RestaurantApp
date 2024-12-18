import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ListItem = ({ title, urlToImage, onRowClick }) => {
  return (
    <TouchableOpacity onPress={onRowClick}>
      <View style={styles.parent}>
        <Image style={styles.image} source={{ uri: urlToImage }} defaultSource={require('../../assets/favicon.png')} />
        <Text style={styles.text} numberOfLines={4} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: 100,
    width: "95%",
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 3.84, // iOS shadow radius
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    color: "black",
    width: "75%",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default ListItem;
