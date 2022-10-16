import CartContext from "./CartContext";
import React, { useState } from "react";

const ContextState = (props) => {
  
  const state = {
    items: [],
    totalElement: 0,
  };

  return (
    <CartContext.Provider value={ state }>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextState;
