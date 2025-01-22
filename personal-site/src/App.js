import React from "react";
import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main className="container mx-auto px-6">
        <Hero/>
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
