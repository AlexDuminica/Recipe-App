import { Button, Container, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import useRecipeById from "../components/useRecipeById";
import { useParams } from "react-router-dom";

export const Cooking = () => {
  const params = useParams();
  console.log(params);
  const recipe = useRecipeById(params.id);

  const { name, category, cuisine, instructions, image, video, ingredients, articleLink, tag } =
    recipe;

  console.log("RECIPEEEEE", recipe);
  return (
    <Layout>
      <h2>Insert {name} Teriyaki Chicken </h2>
      <Image src={image} alt="" width="400px" />

      <div className="d-flex flex-column">
        <p>{tag}</p>
        <p>{category}</p>
        <p>{cuisine}</p>
      </div>
      <Container
        className="d-flex flex-row justify-content-between"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div>
          <h5>
            {ingredients?.map((ingredient) => {
              return (
                <div>
                  {ingredient.name}
                  {ingredient.measure}
                </div>
              );
            })}
          </h5>
        </div>
        <div>
          <h5>Cooking instructions</h5>
          <p>{instructions}</p>
        </div>
      </Container>

      <Container>
        <h1>
          <iframe src={video} />
        </h1>
      </Container>

      <Button className="m-3">Save recipe </Button>
    </Layout>
  );
};
