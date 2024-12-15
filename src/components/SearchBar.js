import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style = {styles.searchBarBg} >
            <TextInput style={styles.textInput} placeholder="Input Here" maxLength={10}></TextInput>
            <Feather style = {{alignSelf : "center"}} name="search" size={30} color="black" />
       { /* <Image style={styles.image} source={require('../../assets/search.png')} />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarBg: {
        flexDirection: "row",
        width: "90%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#F0EEEE",
        justifyContent : 'center',
        paddingLeft : 10,
    },

    textInput : {
        fontSize : 20,
        color : "black",
        style : "bold",
        width : "80%",
    },

    image : {
        width : 30,
        height : 30,
        alignSelf : "center",
    }

    
});

export default SearchBar;