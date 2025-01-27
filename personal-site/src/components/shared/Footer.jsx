import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="/assets/icons/github.svg" alt="GitHub" className="w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
