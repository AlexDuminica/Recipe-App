import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavourites } from "../store/Favourites/actions";
import { useContext } from "react";
import { FavouritesContext } from "../store/Favourites/context";
import "./RecipeCard.css";

export default function RecipeCard(props) {
  const { favouritesDispatch } = useContext(FavouritesContext);
  const { imgSrc, title, mealId, hasCloseButton } = props;

  const handleRemoveFromFavourites = (id) => {
    const actionResult = removeFromFavourites(id);
    favouritesDispatch(actionResult);
  };
  return (
    <Card className="d-flex justify-content-between align-items center my-4 cardHover">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>Check out this recipe below:</Card.Text>
        <Link to={`/Cooking/${mealId}`} className="btn btn-warning">
          Go to recipe
        </Link>
      </Card.Body>
      {hasCloseButton && (
        <Button
          className="recipe-card-button-remove"
          variant="light"
          onClick={() => {
            handleRemoveFromFavourites(mealId);
          }}
        >
          <span className="btn-close btn-close-dark"></span>
        </Button>
      )}
    </Card>
  );
}
