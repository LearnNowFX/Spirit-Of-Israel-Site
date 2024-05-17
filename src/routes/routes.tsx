import Home from "src/pages/Home/Home";
import Contact from "src/pages/Contact/Contact";
import Products from "src/pages/Products/Products";
import { IRoute } from "../interfaces/route.interface";

export const ROUTES: IRoute[] = [
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/home/*",
    element: <Home />,
  },
  {
    path: "/products/*",
    element: <Products />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
];
