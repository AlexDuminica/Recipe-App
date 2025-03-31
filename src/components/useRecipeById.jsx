import { useEffect, useState } from "react";
import { API_URL } from "../api/endpoint";

export default function useRecipeById(id) {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(API_URL.searchById + id)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]));
  }, []);

  return { recipe };
}
