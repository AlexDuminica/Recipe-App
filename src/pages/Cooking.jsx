import { Button, Card, Container, Image } from "react-bootstrap";
import Layout from "../components/Layout";
import useRecipeById from "../components/useRecipeById";
import { useParams } from "react-router-dom";
import "./Cooking.css";
import { addToFavourites } from "../store/Favourites/actions";
import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../store/Favourites/context";

export const Cooking = () => {
  const { favouritesDispatch } = useContext(FavouritesContext);
  const params = useParams();

  const recipe = useRecipeById(params.id);

  const { id, name, category, cuisine, instructions, image, video, ingredients, tag } = recipe;

  const handleAddToFavourites = (recipes) => {
    const actionResult = addToFavourites(recipes);
    favouritesDispatch(actionResult);
  };

  const [videoId, setVideoId] = useState();

  useEffect(() => {
    if (video) {
      const urlParams = new URLSearchParams(new URL(video).search);
      setVideoId(urlParams.get("v"));
    }
  }, [video]);

  return (
    <Layout>
      <h2 className="title"> {name} </h2>
      <Container className="d-flex justify-content-between align-items-center containerInCooking gap-5">
        <div>
          <Image src={image} alt="dish" />
          <div className="d-flex flex-row gap-2 justify-content-center">
            <div className="food-categ">
              ({tag} {category} {cuisine})
            </div>
          </div>
        </div>

        <Card className="cardInCooking">
          <h5>
            List of Ingredients
            <span class="material-symbols-outlined">nutrition</span>
          </h5>
          {ingredients?.map((ingredient) => {
            return (
              <div className="d-flex justify-content-between mx-2 py-1" key={ingredient.key}>
                <div className="ingredients">{ingredient.name}</div>
                <div>{ingredient.measure}</div>
              </div>
            );
          })}
        </Card>
      </Container>
      <br />
      <Container className="d-flex flex-column justify-content-center p-3 cookInstructions">
        <h5>Cooking instructions</h5>
        <p className="p-instructions">{instructions}</p>
        <Button
          variant="dark"
          onClick={() => {
            handleAddToFavourites({
              id,
              image,
              name,
              category,
              cuisine,
              hasCloseButton: true,
            });
          }}
        >
          Save recipe
        </Button>
      </Container>
      <Container className="my-5 youtube" style={{ padding: "0px" }}>
        <div>
          <iframe
            width="540"
            height="338"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </Layout>
  );
};
