import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Options() {
  return (
    <div className="Options">
      <Link to="/menu" className="Options-option">
        MENU
      </Link>
      <Link to="/orders" className="Options-option">
        ORDERS
      </Link>
      <Link to="/payments" className="Options-option">
        BALANCE
      </Link>
    </div>
  );
}

export default Options;
