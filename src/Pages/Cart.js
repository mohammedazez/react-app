import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Cart.css";
// import bakso from "../Assets/bakso.webp";
// Import action
import { handlePlus, handleMinus } from "../Redux/Action/cart.action";
// Import hooks redux
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const product = [
    {
      name: "Bakso",
      price: 25000,
      img: require("../Assets/bakso.webp"),
    },
  ];
  const selector = useSelector((state) => state.cart);
  const total = useSelector((state) => state.totalBelanja);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        {product.map((item) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/01/4-4-optimized-via-renna_susan.gif"
              />
              {/* <img src="{item.img}" alt="bakso" /> */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <p> Harga : {item.price}</p>
                <p> Total: {total}</p>
                <p>Kuantitas: {selector}</p>
                <Button
                  className="tombol"
                  variant="primary"
                  onClick={() => {
                    dispatch(handleMinus(item));
                  }}
                >
                  Kurangi
                </Button>
                <Button
                  className="tombol"
                  variant="primary"
                  onClick={() => {
                    dispatch(handlePlus(item));
                  }}
                >
                  Tambah
                </Button>
              </Card.Body>
            </Card>

            {/* <button
              onClick={() => {
                dispatch(harga(item));
              }}
            >
              Beli
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
