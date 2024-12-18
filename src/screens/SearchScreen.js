import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";

import ListItem from "../components/ListItem";
import useNewsResults from "../hooks/useNewsResults";
const SearchScreen = ({ navigation }) => {
  console.log("Search Screen Loaded");
  const [searchText, setSearchText] = useState("");
  const [getNews, results, errorMessage] = useNewsResults();
  
  
    //getNews("covid");

  return (
    <View style={styles.parent}>
      <SearchBar
        text={searchText}
        onTextChange={(newText) => {
          setSearchText(newText);
        }}
        onEditEnd={(finalText) => {
          getNews(finalText);
        }}
      ></SearchBar>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>
        Found {results.length} Results for
        <Text style={{ color: "green", fontWeight: "900" }}> {searchText}</Text>
      </Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <FlatList
        data={results}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              urlToImage={item.urlToImage}
              onRowClick={() => {
                navigation.navigate("details", {
                  title: item.title,
                  content: item.content,
                  imageUrl: item.urlToImage,
                });
              }}
            ></ListItem>
          );
        }}
      ></FlatList>
    </View>
  );
};

styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 15,
  },
});

export default SearchScreen;
