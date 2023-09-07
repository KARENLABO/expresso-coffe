import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders, Payments, Error } from "./Pages";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/payments",
      element: <Payments />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
