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
        <h4 className="my-5 px-5">
          <p>
            Let's Get Cooking" is a fun and interactive recipe discovery app designed to make meal
            planning effortless. Browse a variety of delicious recipes, save your favorites, and get
            inspired. Whether you're looking for quick meals or trying something new, this app helps
            you find the perfect dish with ease.
          </p>
          <br />
          <p>
            Enjoy a simple and clean interface with easy navigation, full list of recipes, and a
            favorites list.
          </p>
        </h4>
        <h5>
          <p> Get ready to explore, cook, and savor amazing flavors!</p>
        </h5>
        <CarouselComp />
      </div>
      <Footer />
    </div>
  );
}
