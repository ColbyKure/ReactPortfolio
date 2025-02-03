import React from "react";
import { motion } from "framer-motion";
// Import the images at the top if they are inside the 'src/assets' folder

const experience = [
  {
    title: "Custom Sales Dashboard and DevOps Pipeline",
    image: "/images/salesdash.webp",
    description: "A Dashboard to view, manage, and compute sales data.",
    link: "/custom-sales-dash",
  },
  {
    title: "Automated Report Manager and API",
    image: "/images/automatedreport.webp",
    description: "A Reporting tool to consolodate sales data, send out weekly reports, and UI for other company functions",
    link: "https://github.com/ColbyKure/TftLib",
  },
  {
    title: "Online Learning Platform",
    image: "/images/elearning.jpg", 
    description: "A React Django Application built for HR team to upload videos and employees to watch.",
    link: "/elearning",
  },
  {
    title: "Synopsys Blackduck Primary User",
    image: "/images/blackduck.png", 
    description: "A Software for checking code dependencies and License detection.",
    link: "/blackduck",
  },
  {
    title: "OVT Internship",
    image: "/images/internship.jpg", 
    description: "Interned at Omnivision and created functional and integration tests using Selenium",
    link: "/internship",
  },
];

const projects = [
  {
    title: "Teamfight Tactics Calculator",
    image: "/images/tft-image.png",
    description: "A calculator to test different item combos and also roll odds with X gold",
    link: "https://github.com/ColbyKure/TftLib",
  },
  {
    title: "Boba Bear",
    image: "/images/bobabear.webp",
    description: "A generic Boba Shop website. Can upload menu, change prices, and order drinks.",
    link: "https://github.com/ColbyKure/BobaShop",
  },
];

const ProjectGallery = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {experience.map((project, index) => (
          <motion.div
            key={index}  // Use index as the key for unique identification
            className="bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}  // Image path from the projects array
                alt={project.title}
                className="w-full h-60 rounded-md mb-4 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center mb-10 mt-20">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}  // Use index as the key for unique identification
            className="bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}  // Image path from the projects array
                alt={project.title}
                className="w-full h-60 rounded-md mb-4 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
