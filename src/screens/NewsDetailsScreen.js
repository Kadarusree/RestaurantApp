import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const NewsDetailsScreen = ({ navigation }) => {
    const { title, content, imageUrl } = navigation.state.params;

    console.log("Title: ", title);

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 8,
    },
    content: {
        fontSize: 16,
        color: "#333",
    },
});

export default NewsDetailsScreen;