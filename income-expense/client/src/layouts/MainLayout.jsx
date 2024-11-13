import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <div className="container text-center">
        <h3>Income Expense Tracker</h3>
        <hr/>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default MainLayout;
