import React, { useState } from "react";
import "./App.css";
import useSearchMovie from "./hooks/useSearchMovie";

function App() {
  const [query, setQuery] = useState("");
  const { results, loading, error } = useSearchMovie(query);

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>Search Movie:</h1>
      <input
        type="text"
        placholder="Type your movie ..."
        value={query}
        onChange={searchHandler}
      ></input>
      {loading && <p>Now Loading ...</p>}
      {error && <p>Error</p>}
      <ul>
        {results.map((movie) => {
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
