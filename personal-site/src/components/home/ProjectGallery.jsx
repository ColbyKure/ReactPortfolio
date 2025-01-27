import React from "react";
import { motion } from "framer-motion";
// Import the images at the top if they are inside the 'src/assets' folder

const projects = [
  {
    title: "Teamfight Tactics Calculator",
    image: "/images/tft-image.png",  // Use the imported image
    description: "A calculator to optimize team compositions and item builds in TFT.",
    link: "https://github.com/ColbyKure/TftLib",
  },
  {
    title: "Social Media Dashboard",
    image: "/images/social-media-dashboard.png",  // Use your actual image for this project
    description: "A responsive dashboard for tracking social media analytics.",
    link: "#",  // Replace with the actual link if applicable
  },
  // Add more projects as needed
];

const ProjectGallery = () => {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Passion Projects</h2>
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
