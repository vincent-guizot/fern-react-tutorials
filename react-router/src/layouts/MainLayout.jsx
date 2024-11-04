import React from "react";
import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1>React Router Dom</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/people">People</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default MainLayout;
