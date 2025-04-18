import { useState, useEffect } from "react";
import { APIs } from "../api/endpoint";
import { getRecipeDetails } from "../utils/adaptors";

// convert thids into a hook and get the data from the hook and use it in your component
export const useRecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(APIs.search)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(getRecipeDetails(data));
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { recipes, isLoading, error };
};
