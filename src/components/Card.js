import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardFilm = (props) => {
  const { title, category, id } = props.infoMovie;
  return (
    <div>
      <Card class="Card">
        <CardImg
          top
          width="100%"
          src="/assets/spirited_away1.png"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {category}
          </CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <i class="far fa-thumbs-up"></i>
          <i class="far fa-thumbs-down"></i>
          <Button onClick={() => props.deleteMovie(id)}>Supprimer</Button>
        </CardBody>
      </Card>
      {/* <h1>Hello react</h1> */}
    </div>
  );
};

export default CardFilm;
