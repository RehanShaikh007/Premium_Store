import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text inline-block">
              Premium Store
            </h1>
          </Link>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
