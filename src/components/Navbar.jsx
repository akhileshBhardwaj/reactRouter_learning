import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-5 bg-gray-900 ">
      <div className="flex  items-center justify-center gap-x-3 lg:gap-x-7">
        {/* Link using for navigating to the pages */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* NavLink using for navigating to the pages */}
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-emerald-600" : "text-white"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to={"/user"}
          className={({ isActive }) =>
            isActive ? "text-emerald-600" : "text-white"
          }
        >
          User
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
