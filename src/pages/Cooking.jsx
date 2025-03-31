import { Button, Container, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import useRecipeById from "../components/useRecipeById";
import { useParams } from "react-router-dom";

export const Cooking = () => {
  const params = useParams();
  const { recipe } = useRecipeById(params.id);
  console.log(recipe);
  return (
    <Layout>
      <h2>Insert strMeal: Teriyaki Chicken </h2>
      <Image
        src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Summer-Cobb-Salad-in-Bowl.jpg"
        alt=""
        width="400px"
      />

      <div className="d-flex flex-column">
        <p>Insert strTags: Pasta, Curry</p>
        <p>Insert strCateeory: Vegetarian</p>
        <p>Insert strArea: Italian</p>
      </div>
      <Container
        className="d-flex flex-row justify-content-between"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div>
          <h5>Ingredients:</h5>
          <ol>
            <li>Ingredient 1 and Insert strMeasure1</li>
            <li>Ingredient 1</li>
            <li>Ingredient 1</li>
            <li>Ingredient 1</li>
            <li>Ingredient 1</li>
          </ol>
        </div>
        <div>
          <h5>Cooking instructions</h5>
          <p>Insert strInstructions with instructions in a list. </p>
        </div>
      </Container>

      <Container>
        <h1>Insert iframe with youtube video</h1>
      </Container>

      <Button className="m-3">Save recipe </Button>
    </Layout>
  );
};
