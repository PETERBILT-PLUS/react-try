import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>HOME</h1>
        <nav>
          <Link to="/First">First</Link>
          <Link to="/Second">Second</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
