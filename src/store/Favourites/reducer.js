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
        return newState;
      }
    }
    case "REMOVE_FROM_FAVOURITES": {
      const filteredRecipes = state.recipes.filter((recipesItem) => {
        return recipesItem.id !== action.payload.id;
      });
      const newState = {
        recipes: filteredRecipes,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
