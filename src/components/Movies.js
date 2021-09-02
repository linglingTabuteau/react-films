import React from "react";
import CardMovie from "./Movie/Movie";
import { Container, Row, Col } from "reactstrap";

const Movies = ({ moviesList, deleteMovie, handleOnChangeVoteCount}) => {
  
  return (
    <Container className="Movies">
      <Row>
        {moviesList.map((movie) => {
          return (
            <Col xs="6" sm="4">
              <CardMovie infoMovie={movie} deleteMovie={deleteMovie}  handleOnChangeVoteCount={ handleOnChangeVoteCount}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
