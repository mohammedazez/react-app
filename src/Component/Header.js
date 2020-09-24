import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

// Import hooks redux
import { useSelector } from "react-redux";

function Header() {
  const selector = useSelector((state) => state.cart);
  const total = useSelector((state) => state.totalBelanja);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Beli Bakso</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <img
              src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png"
              alt="cart"
              className="picture"
            />
            <Nav.Link href="#deets">Jumlah mangkok : {selector}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Total Harga : {total}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
