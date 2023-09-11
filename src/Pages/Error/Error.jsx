import React from "react";
import { PageNotFound } from "../../Assets";
import "./styles.scss";

function Error() {
  return (
    <div className="error-page">
      <img src={PageNotFound} alt="Error" />
      <h1>404</h1>
      <p>Oops! Something went wrong.</p>
      <a href="/">Go to the homepage</a>
    </div>
  );
}

export default Error;
