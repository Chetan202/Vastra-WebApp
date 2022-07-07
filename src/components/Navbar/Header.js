import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Registration from "../Registration/Reg";
import Checkout from "../Checkout/Checkout"
import logo from "../Images/logo.png";
import Shop from "../Shop/Shop";
import Contact from "../Home/Contact.js";

function header() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          {/* LOGO */}
          <img src={logo} />
        </Link>
      </div>
      <div className="otherMenu">
        <ul>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Registration">Login</a>
          </li>
          <li>
            <a href="/Checkout">Checkout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
