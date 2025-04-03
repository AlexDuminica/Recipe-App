import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import "./components/Header.css";
import { Cooking } from "./pages/Cooking";
import Favourites from "./pages/Favourites";
import { useReducer } from "react";
import { favouritesReducer, initialState } from "./store/Favourites/reducer";
import { FavouritesContext } from "./store/Favourites/context";
import LocalStorageApp from "./components/LocalStorageApp";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Recipes",
    element: <Recipes />,
  },
  {
    path: "/Cooking/:id",
    element: <Cooking />,
  },
  {
    path: "/Favourites",
    element: <Favourites />,
  },
]);

function App() {
  const [favouritesState, favouritesDispatch] = useReducer(favouritesReducer, initialState);
  const favouritesContextValue = { favouritesState, favouritesDispatch };

  return (
    <div className="App bg">
      <FavouritesContext.Provider value={favouritesContextValue}>
        <RouterProvider router={appRouter} />
        <LocalStorageApp />
      </FavouritesContext.Provider>
    </div>
  );
}

export default App;
