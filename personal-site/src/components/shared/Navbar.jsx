import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-xl font-bold">
          Colby Kure
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/work-experience" className="hover:text-gray-400 transition">
              Work Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
