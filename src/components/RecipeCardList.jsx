import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

export default function RecipeCardList({ recipes }) {
  return (
    <Container>
      <Row>
        {recipes?.map((meal) => {
          return (
            <Col xs={12} md={4} lg={3} key={meal.id}>
              <RecipeCard
                mealId={meal.id}
                imgSrc={meal.image}
                title={meal.name}
                hasCloseButton={meal.hasCloseButton}
              ></RecipeCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
