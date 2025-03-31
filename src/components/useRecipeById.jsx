import { useEffect, useState } from "react";
import { APIs } from "../api/endpoint";
import { getRecipeDetails } from "../utils/adaptors";

export default function useRecipeById(id) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`${APIs.searchById}${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("TAGGGGGGGG >>>>>>>>>> ", data);
        setRecipe(getRecipeDetails(data)[0]);
      })
      .catch((e) => {
        console.log("Error get recipeById", e);
      });
  }, [id]);

  console.log(id, recipe);
  return recipe;
}
