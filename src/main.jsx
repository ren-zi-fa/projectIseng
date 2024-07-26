import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import "./assets/styles/index.css";
import ErrorPageNotfound from "./pages/404";
import CobaSaja from "./components/layouts/CobaSaja";
import ProductsPage from "./pages/products";
import Profile from "./pages/profile";
import DetailProduct from "./pages/detailProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CobaSaja />,
    errorElement: <ErrorPageNotfound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/products/:id",
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
