import React from "react";
import "./Header.css";

// Import hooks redux
import { useSelector } from "react-redux";

function Header() {
  const selector = useSelector((state) => state.cart);
  const total = useSelector((state) => state.totalBelanja);
  return (
    <div>
      <img
        src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png"
        alt="cart"
        className="picture"
      />
      {selector}
      <p>{total}</p>
    </div>
  );
}

export default Header;
