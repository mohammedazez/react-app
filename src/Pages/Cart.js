import React from "react";
// Import action
import { handlePlus, handleMinus } from "../Redux/Action/cart.action";
// Import hooks redux
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const product = [
    {
      name: "Bakso",
      price: 25000,
    },
  ];
  const selector = useSelector((state) => state.cart);
  const total = useSelector((state) => state.totalBelanja);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {product.map((item) => (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <h1>Ini halaman Cart</h1>
            <button
              onClick={() => {
                dispatch(handlePlus(item));
              }}
            >
              +
            </button>
            <h1>{selector}</h1>
            <button
              onClick={() => {
                dispatch(handleMinus(item));
              }}
            >
              -
            </button>
            {/* <button
              onClick={() => {
                dispatch(harga(item));
              }}
            >
              Beli
            </button> */}
            <p>{total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
