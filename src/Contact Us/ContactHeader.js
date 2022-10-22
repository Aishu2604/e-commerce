import React from "react";
import { Link } from "react-router-dom";
import "./ContactHeader.css";

const ContactHeader = () => {
  return (
    <React.Fragment>
      <div>
        <div className="upperPart">
          <Link to="/Home">HOME</Link>
          <Link to="/">STORE</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Contact Us">Contact Us</Link>
        </div>
        <div className="lowerPart">
          <h1>THE GENERIC</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactHeader;