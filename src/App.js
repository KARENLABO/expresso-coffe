import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders, Payments, Menu, Error } from "./Pages";
import { DataProvider } from "./ContextProvider/ContextProvider";
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
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}

export default App;
