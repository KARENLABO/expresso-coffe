import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders, Payments, Menu, Error } from "./Pages";
import "./App.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/menu",
      element: <Menu />,
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
