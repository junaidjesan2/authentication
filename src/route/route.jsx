import { createBrowserRouter } from "react-router-dom";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Orders from "../components/pages/Orders";
import Home from "../components/pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);
