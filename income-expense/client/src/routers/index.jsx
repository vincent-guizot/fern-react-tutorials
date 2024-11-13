import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import EditIncome from "../pages/EditIncome";
import EditExpense from "../pages/EditExpense";

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
        path: "/editIncome/:id", // http://localhost:5173/editIncome
        element: <EditIncome />,
      },
      {
        path: "/editExpense/:id", // http://localhost:5173/editExpense
        element: <EditExpense />,
      },
    ],
  },
]);

export default router;
