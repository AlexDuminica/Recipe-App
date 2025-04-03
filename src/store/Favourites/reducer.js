export const initialState = {
  recipes: [],
};

export function favouritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      const isInList = state.recipes.find((recipesItem) => {
        return recipesItem.id === action.payload.id;
      });
      if (isInList) {
        return state;
      } else {
        const newState = {
          recipes: [action.payload, ...state.recipes],
        };

        localStorage.setItem("favourites", JSON.stringify(newState));

        return newState;
      }
    }
    case "ADD_FAVOURITES_FROM_LOCAL_STORAGE": {
      const localFavourites = JSON.parse(localStorage.getItem("favourites"));
      console.log(localFavourites);
      return localFavourites;
    }

    case "REMOVE_FROM_FAVOURITES": {
      const filteredRecipes = state.recipes.filter((recipesItem) => {
        return recipesItem.id !== action.payload.id;
      });
      const newState = {
        recipes: filteredRecipes,
      };

      localStorage.setItem("favourites", JSON.stringify(newState));

      return newState;
    }
    default: {
      return state;
    }
  }
}
