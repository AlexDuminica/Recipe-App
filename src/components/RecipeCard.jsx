import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  const { imgSrc, title, mealId } = props;
  return (
    <Card className="d-flex justify-content-between align-items center">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>Check out this recipe below:</Card.Text>
        <Link to={`/Cooking/${mealId}`} className="btn btn-warning">
          Go to recipe
        </Link>
      </Card.Body>
    </Card>
  );
}
