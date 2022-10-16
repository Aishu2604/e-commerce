import React, { useState, useContext } from "react";
import "./Cart.css";
import CartContext from "../CONTEXT/CartContext";

const Cart = (props) => {
  const test = useContext(CartContext);
  console.log(test);

  let [items, setCartItems] = useState(test.items);

  if (!props.open) {
    return;
  }
  function removeItem(item) {
    setCartItems(() => (items = items.filter((key) => key.id !== item.id)));

    test.items = items;
    test.totalElements = test.totalElements + 1;
  }

  console.log(test.items);

  const purchaseButton = () => {
    if (test.items.length !== 0) {
      setCartItems(() => (test.items = []));
      test.items = 0;
      alert("Thank you for Shoping with us");
    } else {
      alert("Please add items to the cart !");
    }
  };

  return (
    <div className="mainCart">
      <h1> cart </h1>
      <button onClick={props.close}> X </button>
      <div className="cart">
        <h3> Item</h3>
        <h2> Price</h2>
        <h3> Quantity </h3>
      </div>
      <div className="cartItem">
        {items.map((item) => {
          return (
            <div className="mapItem">
              <div className="image">
                <img src={item.imageUrl} alt=" " width={70} height={70} />
                <h4>{item.title}</h4>
              </div>
              <div className="price">
                <h3>{item.price}</h3>
              </div>
              <div className="input">
                <input type="number" min="1" max="7" value="1" />
                <button onClick={() => removeItem(item)}>REMOVE</button>
              </div>
              <br />
            </div>
          );
        })}
      </div>
      <button onClick={purchaseButton}> PURCHASE </button>
    </div>
  );
};

export default Cart;
