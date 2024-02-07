import { ReactNode } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Layout from "../layout";

export default function Routes(): ReactNode {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
}
