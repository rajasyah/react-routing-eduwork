import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-14 bg-black text-white">
      <h1 className="ml-5 text-xl font-bold">Navbar</h1>
      <ul className="flex items-center gap-5 mr-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </ul>
    </div>
  );
};

export default Navbar;
