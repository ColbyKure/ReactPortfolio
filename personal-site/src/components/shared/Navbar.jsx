import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">My Portfolio</a>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/blogs" className="hover:underline">Blogs</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
