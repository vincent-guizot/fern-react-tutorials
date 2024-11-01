import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const URL = "https://api.themoviedb.org/3/movie/now_playing";

  const getMovies = async () => {
    try {
      let movies = await axios({
        method: "GET",
        url: URL,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });
      setMovies(movies.data.results);
      //   console.log(movies.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
    // console.log(import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="text-centre">3rd Party API</Col>
        </Row>
      </Container>
      <Container>
        <MovieList movies={movies}></MovieList>
      </Container>
    </>
  );
}

export default Home;
