import Footer from "../components/Footer";
import Header from "../components/Header";
import "../LandingPage.css";
import { useContext, useEffect, useReducer } from "react";
import { addFavouritesFromLocalStorage } from "../store/Favourites/actions";
import { FavouritesContext } from "../store/Favourites/context";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <h1>Ready, Set, Cook!🧑🏻‍🍳</h1>
          <Link to="/Recipes" className="btn btn-primary ">
            Find a Recipe
          </Link>
        </div>
      </div>
      <Container className="homepage-description">
        <div className="my-5 px-5">
          <h2> Let's Get Cooking!</h2>
          <p style={{ lineHeight: "25px" }}>
            This is a fun and interactive recipe discovery app designed to make meal planning
            effortless. Browse a variety of delicious recipes, save your favorites, and get
            inspired. Whether you're looking for quick meals or trying something new, this app helps
            you find the perfect dish with ease.
          </p>
          <br />
          <p>
            Enjoy a simple and clean interface with easy navigation, full list of recipes, and a
            favorites list.
          </p>
        </div>
        <h5>
          <p> Get ready to explore, cook, and savor amazing flavors!</p>
        </h5>
        {/* <CarouselComp /> */}
      </Container>
      <Footer />
    </div>
  );
}
