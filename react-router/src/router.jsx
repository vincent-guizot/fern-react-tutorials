import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import People from "./pages/People";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", // http://localhost:5173/
        element: <Home />,
      },
      {
        path: "/about", // http://localhost:5173/about
        element: <About />,
      },
      {
        path: "/people/:id", // http://localhost:5173/people
        element: <People />,
      },
    ],
  },
]);

export default router;
