// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Colby Kure</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
