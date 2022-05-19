import React from "react";
import "../styles/Details.css";
import { Link } from "react-router-dom";
const Details = ({
  strDrinkThumb,
  strDrink,
  strCategory,
  strGlass,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
}) => {
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];
  const measures = [
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  ];

  return (
    <>
      <div className="drink">
        <img src={strDrinkThumb} />
        <div className="drinkInfo">
          <p>
            <span className="data">Name: </span>
            {strDrink}
          </p>
          <p>
            <span className="data">Category: </span>
            {strCategory}
          </p>
          <p>
            <span className="data">Glass: </span>
            {strGlass}
          </p>
          <p>
            <span className="data">Instructions: </span>
            {strInstructions}
          </p>
          <p>
            <span className="data"> Ingredients: </span>
            {ingredients.length > 0 &&
              ingredients.map((ing) => {
                return <span>{ing}</span>;
              })}
          </p>
          <p>
            <span className="data"> Measures: </span>
            {measures.length > 0 &&
              measures.map((me) => {
                return <span>{me}</span>;
              })}
          </p>
          <Link className="drinkLink" to={"/menu"}>
            Back Menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
