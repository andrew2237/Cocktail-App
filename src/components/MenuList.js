import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css"
const MenuList = ({ strDrinkThumb, strDrink, strGlass, idDrink }) => {
  return (
    <div className="menuItem">
      <Link to={`/${idDrink}`} className="link">
        <img src={strDrinkThumb} />
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <button className="inputSubmit">More Details</button>
      </Link>
    </div>
  );
};

export default MenuList;

