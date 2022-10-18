import React from "react";
import { Link } from "react-router-dom";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div>
        <div className="upperPart">
          <Link to="/Home">HOME</Link>
          <Link to="/">STORE</Link>
          <Link to="/About">ABOUT</Link>
        </div>
        <div className="lowerPart">
          <h1>THE GENERIC</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
