import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home";
import Wallet from "../components/Wallet";
import AboutMe from "../components/AboutMe";

import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/about_me",
        element: <AboutMe />,
      },
    ],
  },
]);

export default router;
