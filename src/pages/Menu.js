import MenuList from "../components/MenuList";
import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import Spinner from "react-bootstrap/Spinner";
const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s";
const searchApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Menu = () => {
  const [drinks, setDrinks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const getDrinks = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setDrinks(data.drinks);
      console.log(data);
      if (!data.drinks) {
        setDrinks(null);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDrinks(apiUrl);
  }, []);

  const OnSubmit = (e) => {
    e.preventDefault();
    if (query) {
      getDrinks(searchApi + query);
      setQuery("");
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  if (!drinks) {
    return (
      <div className="menu">
        <header>
          <h1 className="menuTitle">Drinks Menu</h1>
          <form onSubmit={OnSubmit}>
            <input
              className="appinput"
              type="text"
              placeholder="search for your cocktail"
              value={query}
              onChange={handleSearch}
            />
            <input className="submitinput" type="submit" value="Search" />
          </form>
        </header>
        <h1>Sorry Your Cocktail Dose Not Match</h1>;
      </div>
    );
  }
  return (
    <div className="menu">
      <header>
        <h1 className="menuTitle">Drinks Menu</h1>
        <form onSubmit={OnSubmit}>
          <input
            className="appinput"
            type="text"
            placeholder="search for your cocktail"
            value={query}
            onChange={handleSearch}
          />
          <input className="submitinput" type="submit" value="Search" />
        </form>
      </header>
      <div className="menuList">
        {drinks.length > 0 &&
          drinks.map((drink) => {
            return <MenuList key={drink.idDrink} {...drink} />;
          })}
      </div>
      <div>{!drinks && <div> No cocktail</div>}</div>
    </div>
  );
};

export default Menu;
