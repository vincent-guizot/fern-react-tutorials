import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "5c21622dcb75a52ba1a23c16efdd72ad";
const URL = `https://api.themoviedb.org/3/search/movie`;

function useSearchMovie(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const movies = await axios({
          method: "GET",
          url: URL,
          params: {
            api_key: API_KEY,
            query: query,
          },
        });
        //   console.log(movies.data.results)

        if (movies.data.results.length > 0) {
          setLoading(false);
        }
        
        setResults(movies.data.results);
      } catch (err) {
        setError(err);
        //   return [];
      } finally {
        setLoading(true);
      }
    };

    fetchMovies();
  }, [query]);

  return {
    results,
    loading,
    error,
  };
}

export default useSearchMovie;
