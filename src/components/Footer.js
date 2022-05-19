import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2022 Andrew_Saed.com</p>
    </div>
  );
};

export default Footer;
