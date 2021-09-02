import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";
import ToggleButton from "../ToggleButton";
import "./Movie.css";

const CardMovie = ({ infoMovie, deleteMovie, handleOnChangeVoteCount }) => {
  const { id, title, category, likes, dislikes } = infoMovie;

  const handleLikeToggle = (likeCount) => {
    let vote = { like: likeCount, dislike: dislikes };
    handleOnChangeVoteCount(id, vote);
    console.log(vote);
  };
  const handleDislikeToggle = (dislikeCount) => {
    let vote = { like: likes, dislike: dislikeCount };
    handleOnChangeVoteCount(id, vote);
    console.log(vote);
  };

  return (
    <div>
      <Card className="Movie">
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
          <ToggleButton
            label="Like"
            onToggle={handleLikeToggle}
            count={likes}
          />
          <ToggleButton
            label="Dislike"
            onToggle={handleDislikeToggle}
            count={dislikes}
          />
          <meter
            id="fuel"
            min="0"
            max={likes + dislikes}
            low="3"
            high="8"
            value={likes}
          ></meter>

          <Button color="danger" onClick={() => deleteMovie(id)}>
            Supprimer
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardMovie;
