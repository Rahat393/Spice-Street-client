import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Order from "../Order/Order/Order";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
]);
