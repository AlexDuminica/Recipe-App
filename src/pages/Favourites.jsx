import { useContext } from "react";
import Layout from "../components/Layout";
import { FavouritesContext } from "../store/Favourites/context";
import { Container } from "react-bootstrap";
import RecipeCardList from "../components/RecipeCardList";
import RecipeCard from "../components/RecipeCard";

export default function Favourites() {
  const { favouritesState } = useContext(FavouritesContext);
  const { recipes } = favouritesState;

  console.log(favouritesState);
  return (
    <Layout>
      <h1>Favourites page</h1>
      <Container className="fav-container">
        <RecipeCardList recipes={recipes} />
      </Container>
    </Layout>
  );
}
