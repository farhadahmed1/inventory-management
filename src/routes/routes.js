import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./../views/pages/home/Home";
import User from "./../views/components/user/User";
import Product from "./../views/components/product/Product";
import Brands from "./../views/components/Brands/Brands";
import Stores from "../views/components/Stores/Stores";
import Suppliers from "../views/components/Suppliers/Suppliers";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "brand",
        element: <Brands />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
    ],
  },
]);

export default routes;
