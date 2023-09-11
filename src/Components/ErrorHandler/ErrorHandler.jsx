import React, { useState, useEffect } from "react";
import "./styles.scss";

function ErrorHandler({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      // Log the error to the console or to an error logging service
      console.error(error);

      // Update the state to show an error message to the user
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };

    // Add a global error handler
    window.addEventListener("error", handleErrors);

    return () => {
      // Remove the error handler when unmounting the component
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Sorry, an unexpected error occurred. Please try again later.</p>
        {/* Show error details only in development */}
        {process.env.NODE_ENV === "development" && (
          <div>
            <h2>Error Details:</h2>
            <pre>{error && error.toString()}</pre>
            <pre>{errorInfo && errorInfo.componentStack}</pre>
          </div>
        )}
      </div>
    );
  }

  // If there were no errors, render the normal component content
  return children;
}

export default ErrorHandler;
