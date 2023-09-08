import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../Assets/index";
import "./styles.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="overlay"></div>
      <div className="content">
        <Link to="/" className="logo-container">
          <img className="logo-img" src={Logo} alt="logo" />
        </Link>
        <Link to="/menu" className="NavBar-option">
          MENU
        </Link>
        <Link to="/orders" className="NavBar-option">
          ORDERS
        </Link>
        <Link to="/payments" className="NavBar-option">
          PAYMENTS
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
