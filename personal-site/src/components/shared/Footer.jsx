import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center px-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Colby Kure. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-3">
          <Link href="https://github.com/ColbyKure" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.svg" alt="GitHub" className="w-6 hover:opacity-80 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/colby-kure/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 hover:opacity-80 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
