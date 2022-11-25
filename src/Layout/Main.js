import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import CartContext from "../CONTEXT/CartContext";

const Main = () => {
  const a = useContext(CartContext);

  // a.items.push(1233)
  // console.log(a.items);
  const productsArr = [
    {
      id: 1,

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const elementsAddInCart = (prod) => {
    const checkId = a.items.filter((item) => item.id === prod.id).length;

    if (checkId) {
      alert("Ptoduct is Already Added");
    } else {
      a.totalElements = a.totalElements + 1;
      return a.items.push(prod);
    }
  };

  return (
    <div>
      {productsArr.map((prod) => {
        return (
          <div className="product">
            <h2>{prod.title}</h2>
            <Link to="/ /id">
              <img src={prod.imageUrl} alt=" " />
            </Link>
            <h3>{prod.price}</h3>
            <button className="add" onClick={() => elementsAddInCart(prod)}>
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
