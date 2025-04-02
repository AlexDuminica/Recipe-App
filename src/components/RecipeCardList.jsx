import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { useRecipeList } from "./useRecipesList";

export default function RecipeCardList({ recipes }) {
  return (
    <Container>
      <Row>
        {recipes?.map((meal) => {
          return (
            <Col xs={12} md={4} lg={3} key={meal.id}>
              <RecipeCard mealId={meal.id} imgSrc={meal.image} title={meal.name}></RecipeCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
