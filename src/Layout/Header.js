import React from "react";
import CartButton from "../CART/CartButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <div className="upperPart">
          <Link to="/Home">HOME</Link>
          <Link to="/">STORE</Link>
          <Link to="/About">ABOUT</Link>
          <CartButton />
        </div>
        <div className="lowerPart">
          <h1>THE GENERIC</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
