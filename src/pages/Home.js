import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Banner from "../assets/b7.jpg";
const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="headerContainer">
        <h1>Cocktail Lovers</h1>
        <p>Here You Will Find Your Favorite Cocktail</p>
        <Link className="menuLink" to="/menu">
          SEARCH NOW
        </Link>
      </div>
    </div>
  );
};

export default Home;
