import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Context from "./context/Context.jsx";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import { route } from "./route/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={route}>
      <Layout />
    </RouterProvider>
  </Context>
);
