export function getRecipeDetails(apiResponse) {
  if (!apiResponse || !apiResponse.meals) {
    return [];
  }

  const apiData = apiResponse.meals;
  const adaptedData = apiData.map((meals) => {
    const ingredients = [];

    if (meals.strIngredient1 !== "") {
      ingredients.push({
        name: meals.strIngredient1,
        measure: meals.strMeasure1,
      });
    }

    if (meals.strIngredient2 !== "") {
      ingredients.push({
        name: meals.strIngredient2,
        measure: meals.strMeasure2,
      });
    }
    if (meals.strIngredient3 !== "") {
      ingredients.push({
        name: meals.strIngredient3,
        measure: meals.strMeasure3,
      });
    }
    if (meals.strIngredient4 !== "") {
      ingredients.push({
        name: meals.strIngredient4,
        measure: meals.strMeasure4,
      });
    }
    if (meals.strIngredient5 !== "") {
      ingredients.push({
        name: meals.strIngredient5,
        measure: meals.strMeasure5,
      });
    }
    if (meals.strIngredient6 !== "") {
      ingredients.push({
        name: meals.strIngredient6,
        measure: meals.strMeasure6,
      });
    }
    if (meals.strIngredient7 !== "") {
      ingredients.push({
        name: meals.strIngredient7,
        measure: meals.strMeasure7,
      });
    }
    if (meals.strIngredient8 !== "") {
      ingredients.push({
        name: meals.strIngredient8,
        measure: meals.strMeasure8,
      });
    }
    if (meals.strIngredient9 !== "") {
      ingredients.push({
        name: meals.strIngredient9,
        measure: meals.strMeasure9,
      });
    }
    if (meals.strIngredient10 !== "") {
      ingredients.push({
        name: meals.strIngredient10,
        measure: meals.strMeasure10,
      });
    }
    if (meals.strIngredient11 !== "") {
      ingredients.push({
        name: meals.strIngredient11,
        measure: meals.strMeasure11,
      });
    }
    if (meals.strIngredient12 !== "") {
      ingredients.push({
        name: meals.strIngredient12,
        measure: meals.strMeasure12,
      });
    }
    if (meals.strIngredient13 !== "") {
      ingredients.push({
        name: meals.strIngredient13,
        measure: meals.strMeasure13,
      });
    }

    console.log("INGREDIENTS -------------->", ingredients);

    return {
      id: meals.idMeal,
      name: meals.strMeal,
      category: meals.strCategory,
      cuisine: meals.strArea,
      instructions: meals.strInstructions,
      image: meals.strMealThumb,
      video: meals.strYoutube,
      tag: meals.strTags,
      ingredients,
      articleLink: meals.strSource,
    };
  });

  return adaptedData;
}
