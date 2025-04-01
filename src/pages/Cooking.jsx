import { Button, Card, Container, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import useRecipeById from "../components/useRecipeById";
import { useParams } from "react-router-dom";
import "./Cooking.css";

export const Cooking = () => {
  const params = useParams();
  console.log(params);
  const recipe = useRecipeById(params.id);

  const { name, category, cuisine, instructions, image, video, ingredients, tag } = recipe;

  console.log("RECIPEEEEE", recipe);
  return (
    <Layout>
      <h2 className="title"> {name} </h2>
      <Container className="d-flex justify-content-center align-items-center containerInCooking gap-5">
        <div>
          <Image src={image} alt="dish" />
          <div className="d-flex flex-row gap-2 justify-content-center">
            <p>{tag}</p>
            <p>{category}</p>
            <p>{cuisine}</p>
          </div>
        </div>

        <Card className="card">
          <h5>
            List of Ingredients<span class="material-symbols-outlined">grocery</span>
          </h5>
          {ingredients?.map((ingredient) => {
            return (
              <div className="d-flex justify-content-between mx-2 py-1">
                <div className="ingredients">{ingredient.name}</div>
                <div>{ingredient.measure}</div>
              </div>
            );
          })}
        </Card>
      </Container>
      <br />
      <div className="d-flex flex-column justify-content-center mx-5 p-3 cookInstructions">
        <h5>Cooking instructions</h5>
        <p>{instructions}</p>
      </div>
      <Container className="my-5">
        <div>
          <iframe src={video} />
        </div>
      </Container>
      <Button className="m-3">Save recipe </Button>
    </Layout>
  );
};
