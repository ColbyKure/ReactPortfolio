// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Colby Kure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
