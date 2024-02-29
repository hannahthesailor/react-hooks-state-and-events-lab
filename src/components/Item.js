import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart((prevIsInCart) => !prevIsInCart);
  };

  const itemClass = isInCart ? "in-cart" : "";

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
