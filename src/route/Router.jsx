import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Product from "../pages/product/Product";
import MainHome from "../pages/MainHome/MainHome";
import Carts from "../pages/carts/Carts";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
    ],
  },
]);
