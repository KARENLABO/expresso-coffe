import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Options() {
  return (
    <div className="Options">
      <Link to="/orders" className="Options-option">
        MENU
      </Link>
      <Link to="/orders" className="Options-option">
        ORDERS
      </Link>
      <Link to="/payments" className="Options-option">
        PAYMENTS
      </Link>
    </div>
  );
}

export default Options;
