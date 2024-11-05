import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const fetchMovies = async (searchQuery) => {
    const API_KEY = "5c21622dcb75a52ba1a23c16efdd72ad";
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    try {
      const movies = await axios.get(URL);
      console.log(movies.data.results)
      return movies.data.results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (query.length > 2) {
          const results = await fetchMovies(query);
          setMovies(results);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [query]);

  return (
    <>
      <h1>Search Movie:</h1>
      <input
        type="text"
        placholder="Type your movie ..."
        value={query}
        onChange={searchHandler}
      ></input>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.title} ({movie.release_date})
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
