import React from "react";
import {View, Text, Button, Image} from "react-native";
import {StyleSheet} from "react-native";

const Restaurant = (props)=> {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.source}  />
            <Text>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width : 200,
        height : 100,
        backgroundColor : "lightblue",
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center",
    },

  image : {
    width : "90%",
    padding : 5,
    height : 50,
    borderRadius : 1,
  }
})

export default Restaurant;



