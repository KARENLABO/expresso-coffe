import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/orders" className="NavBar-option">
        ORDERS
      </Link>
      <Link to="/payments" className="NavBar-option">
        PAYMENTS
      </Link>
    </div>
  );
}

export default NavBar;
