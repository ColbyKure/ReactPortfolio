import React from "react";
import Header from "./components/Header";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-12">Colby Kure</h1>
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
