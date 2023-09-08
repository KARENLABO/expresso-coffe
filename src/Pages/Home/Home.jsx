import React from "react";
import NavBar from "./Components";
import { Logo } from "../../Assets";
import "./styles.scss";

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <NavBar />
        <div className="logo-image-container">
          <img className="logo-image" src={Logo} alt="logo" />
        </div>
        <div className="description-container">
          <h4>Welcome to Expresso Coffee!</h4>
          <p>
            Explore our menu, place orders, and manage your purchases. Discover
            the perfect coffee experience with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
