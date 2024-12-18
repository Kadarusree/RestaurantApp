import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import { Feather } from '@expo/vector-icons';

const SearchBar = ({text, onTextChange,onEditEnd }) => {
    return (
        <View style = {styles.searchBarBg} >
            <TextInput style={styles.textInput}
             placeholder="Input Here" 
             maxLength={20} 
             value= {text}
             onChangeText={onTextChange}
             onEndEditing= {(e) => onEditEnd(e.nativeEvent.text)}
             ></TextInput>
            <Feather style = {{alignSelf : "center"}} name="search" size={30} color="black" />
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