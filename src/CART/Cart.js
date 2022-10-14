import React, { useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartElements = [
    {
      id: 1,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  let [cartItems, setCartItems] = useState(cartElements);

  if (!props.open) {
    return;
  }
  function removeItem (removeCartItem){
    setCartItems(
      () =>
        (cartItems = cartItems.filter((key) => key.id !== removeCartItem.id))
    );
  };

  return (
    <div className="mainCart">
      <h1> cart </h1>
      <button onClick={props.close}> * </button>
      <div className="cart">
        <h3> Item</h3>
        <h2> Price</h2>
        <h3> Quantity </h3>
      </div>
      <div className="cartItem">
        {cartItems.map((item) => {
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
                <input type="number" />
                <button onClick={() => removeItem(item)}>REMOVE</button>
              </div>
            </div>
          );
        })}
      </div>
      <button> PURCHASE </button>
    </div>
  );
};

export default Cart;
