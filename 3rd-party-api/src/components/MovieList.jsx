import React from 'react'
import {
    Card,
    Row,
    Col
} from 'react-bootstrap'

function MovieList(props) {
    const {movies} = props
  return (
    <>
    <Row>
        {movies.map(movie => {
            const {original_title, overview, poster_path} = movie;
            console.log(poster_path)
            return (
                <Col md={2}>
                    <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                        <Card.Body>
                            <Card.Title>{original_title}</Card.Title>
                            <Card.Text>{overview}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })}
    </Row>
    </>
  )
}

export default MovieList