import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Details from "../components/Details";
import "../styles/Details.css";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const MenuDetails = () => {
  const { idDrink } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDrinks = async (URL) => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setDrinks(data.drinks[0]);
      console.log(data.drinks[0]);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDrinks(url + idDrink);
    console.log(url + idDrink);
  }, []);
  
  if (loading) {
     return (
       <div className="loading">
         <h1>Loading....</h1>
       </div>
     );
  }
  return <div className="drink">{drinks && <Details {...drinks} />}</div>;
};
/*#2f4c70*/
export default MenuDetails;
