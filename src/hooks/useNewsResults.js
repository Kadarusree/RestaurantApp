import { useEffect, useState } from "react";
import newsapi from "../news/newsapi";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getNews("United States");
  }, []);

  const getNews = async (searchText) => {
    try {
      const response = await newsapi.get(
        `/everything?q=${searchText}&apiKey=84c84aecb41c449b90ab791eb1588c31`
      );
      if (response.data.articles.length > 0) {
        let articles = [];
        for (let i = 0; i < response.data.articles.length; i++) {
          if (response.data.articles[i].urlToImage !== null) {
            articles.push(response.data.articles[i]);
          }
        }
        setResults(articles);
      }
    } catch (e) {
      console.log(JSON.stringify(e));
      setErrorMessage(JSON.stringify(e.message));
    }
  };

  return [getNews, results, errorMessage];
};
