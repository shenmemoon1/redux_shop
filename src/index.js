import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./features/product/AddProduct";

import App from "./App";
import store from "../app/store";
import SinglePage from "./features/product/SinglePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/product", element: <AddProduct /> }
  { path: "/product/:id", element: <SinglePage /> }
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
