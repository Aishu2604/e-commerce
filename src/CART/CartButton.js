import React, { useState } from "react";
import Cart from "./Cart";

const CartButton = (props) => {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  }
  
  const hideCart =() => {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openCart}>Cart {count}</button>
      <Cart open={isOpen} close={hideCart} />
    </div>
  );
};
export default CartButton;
