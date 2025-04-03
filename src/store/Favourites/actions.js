export function addToFavourites(recipe) {
  return {
    type: "ADD_TO_FAVOURITES",
    payload: recipe,
  };
}

export function removeFromFavourites(recipeId) {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload: { id: recipeId },
  };
}

export function addFavouritesFromLocalStorage() {
  return {
    type: "ADD_FAVOURITES_FROM_LOCAL_STORAGE",
  };
}
