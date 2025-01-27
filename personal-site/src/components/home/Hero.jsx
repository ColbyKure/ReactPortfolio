// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Colby</h1>
        <p className="text-xl mb-6">Building modern, innovative solutions for a connected world.</p>
        {/* <a href="#projects" className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-yellow-500">
          View My Work
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
