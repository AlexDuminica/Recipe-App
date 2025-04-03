import { useContext, useEffect } from "react";
import { addFavouritesFromLocalStorage } from "../store/Favourites/actions";
import { FavouritesContext } from "../store/Favourites/context";

export default function LocalStorageApp() {
  const { favouritesDispatch } = useContext(FavouritesContext);

  useEffect(() => {
    favouritesDispatch(addFavouritesFromLocalStorage());
  }, []);

  return <div></div>;
}
