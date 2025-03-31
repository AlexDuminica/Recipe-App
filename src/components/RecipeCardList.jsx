import { Col, Container, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import { useRecipeList } from "./useRecipesList";


export default function RecipeCardList (props) {
    const {recipes} = useRecipeList()
   
    return (
        <Container>
            <Row>
                {recipes?.map((meal) => {
                    console.log(meal)
                    return (
                        <Col xs={12} md={4} lg={3} key= {meal.idMeal}>
                            <RecipeCard 
                            mealId = {meal.idMeal}
                            imgSrc = {meal.strMealThumb}
                            title = {meal.strMeal}>
                            </RecipeCard>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )


}