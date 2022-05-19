import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={isOpen ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNav}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
