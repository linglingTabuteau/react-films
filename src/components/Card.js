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
  const { id, title, category, likes, dislikes } = props.infoMovie;
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
          <i class="far fa-thumbs-up"></i>
          <i class="far fa-thumbs-down"></i>
          {/* <label for="fuel">Fuel level:</label> */}
          <meter
            id="fuel"
            min="0"
            max={likes + dislikes}
            low="3"
            high="8"
            value={likes}
          >
          </meter>
          <Button color="danger" onClick={() => props.deleteMovie(id)}>Supprimer</Button>
          {/* <Button color="danger" onClick={() => alert("être vous sur de supprimer ce movie")}>Supprimer</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardFilm;
