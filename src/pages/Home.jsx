import Footer from "../components/Footer";
import Header from "../components/Header";
import "../LandingPage.css";
import CarouselComp from "../components/CarouselComp";
import { useContext, useEffect, useReducer } from "react";
import { addFavouritesFromLocalStorage } from "../store/Favourites/actions";
import { FavouritesContext } from "../store/Favourites/context";

export default function Home() {
  const { favouritesDispatch } = useContext(FavouritesContext);

  useEffect(() => {
    favouritesDispatch(addFavouritesFromLocalStorage());
  }, []);
  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <div className="overlay">
          <h1>Let's get cooking</h1>
        </div>
      </div>
      <div>
        <h3>Add a text presenting the app</h3>
        <CarouselComp />
      </div>
      <Footer />
    </div>
  );
}
