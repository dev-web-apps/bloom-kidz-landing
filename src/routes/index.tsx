import { ReactNode } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import { ContactUs, FreeTrial, Home, RequestDemo } from "../pages";

export default function Routes(): ReactNode {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/request-demo", element: <RequestDemo /> },
        { path: "/free-trial", element: <FreeTrial /> },
      ],
    },
  ]);
}
