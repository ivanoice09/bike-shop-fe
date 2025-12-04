import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* LEFT: LOGO */}
        <div className="nav-logo">
          <Link to="/home">LOGO</Link>
        </div>

        {/* CENTER: SEARCH */}
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="nav-actions">
          <button className="nav-btn">Cart</button>
          <button className="nav-btn">Login</button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
