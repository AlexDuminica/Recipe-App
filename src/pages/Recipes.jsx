import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import RecipeCardList from "../components/RecipeCardList";
import { useRecipeList } from "../components/useRecipesList";

export const Recipes = () => {
  const { recipes } = useRecipeList();

  return (
    <Layout>
      <Container>
        <h1> Recipes</h1>
        <h5>
          Explore a variety of mouthwatering dishes curated just for you. Whether you're looking for
          a quick weekday meal or something special to impress your guests, you'll find plenty of
          inspiration here. Each recipe comes with easy-to-follow instructions and vibrant images to
          guide you through the cooking process.
        </h5>
        <RecipeCardList recipes={recipes} />
      </Container>
    </Layout>
  );
};
