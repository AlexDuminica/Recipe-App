import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  return (
    <Card className="d-flex justify-content-between align-items center">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.title}</Card.Title>
        <Card.Text>Check out this recipe below:</Card.Text>
        <Link to={`/Cooking/${props.mealId}`} variant="warning">
          Go to recipe
        </Link>
      </Card.Body>
    </Card>
  );
}
