import React from "react";
import CardMovie from "./Movie/Movie";
import { Container, Row, Col } from "reactstrap";

const Movies = ({ moviesList }) => {
  
  return (
    <Container className="Movies">
      <Row>
        {moviesList.map((movie) => {
          return (
            <Col xs="6" sm="4" key={movie.id}>
              <CardMovie infoMovie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
