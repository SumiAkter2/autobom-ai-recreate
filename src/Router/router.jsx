import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Main from "../Component/layout/Main";
import NotFound from "../Component/layout/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/fund",
      //     element: <Fund />,
      //   },
    ],
  },
]);
