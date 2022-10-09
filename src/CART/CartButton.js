import React, { useState } from "react";

const CartButton = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <button>Cart {count}</button>
        </div>

    )
}

export default CartButton;