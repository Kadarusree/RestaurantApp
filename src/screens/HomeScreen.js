import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import Restaurant from "../components/Restaurant";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Details")}
            />

            <View style={styles.container}>
            <Restaurant name = "Srikanth" source = {require("../../assets/icon.png")}/>
            <Restaurant name = "PPP" source = {require("../../assets/icon.png")}/>
            <Restaurant name = "TT" source = {require("../../assets/icon.png")}/>


            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        width : 200,
        height : 100,
        backgroundColor : "green",
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center",
        
    }
})

