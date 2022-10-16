import React, { useState, useContext } from "react";
import Cart from "./Cart";
import CartContext from "../CONTEXT/CartContext";

const CartButton = () => {
  const cartCount = useContext(CartContext);

  const numberOfCartItem = cartCount.items.reduce((cartCount, items) => {
    return  cartCount + items.amount;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const hideCart = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openCart}>Cart {numberOfCartItem}</button>
      <Cart open={isOpen} close={hideCart} />
    </div>
  );
};
export default CartButton;
