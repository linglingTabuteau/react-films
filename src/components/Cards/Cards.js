import React from "react";
import CardFilm from "../Card/Card";
import { Container, Row, Col } from "reactstrap";

const Cards = (props) => {
  
  return (
    <Container class="Cards">
      <Row>
        {props.moviesList.map((movie) => {
          return (
            <Col xs="6" sm="4">
              <CardFilm infoMovie={movie} deleteMovie={props.deleteMovie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
