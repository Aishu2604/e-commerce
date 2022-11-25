import React, { useState, useContext } from "react";
import Cart from "./Cart";
import CartContext from "../CONTEXT/CartContext";
import AuthContext from "../LOGIN CONTEXT/auth-context";
import { useHistory } from "react-router-dom";

const CartButton = () => {
  const cartCount = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/Login");
  };

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  };

  const hideCart = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openCart}>Cart {cartCount.totalAmount}</button>
      {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      <Cart open={isOpen} close={hideCart} />
    </div>
  );
};
export default CartButton;
