import React from "react";
import CartButton from "../CART/CartButton";
import './Header.css';

const Header = () => {
return (
    <React.Fragment>
        <div>
        <div className='upperPart'>
        <h2>HOME</h2>
        <h2>STORE</h2>
        <h2>ABOUT</h2>
        <CartButton />
        </div>
        <div className='lowerPart'>
            <h1>THE GENERIC</h1>
        </div>
        </div>
    </React.Fragment>
)
}


export default Header;