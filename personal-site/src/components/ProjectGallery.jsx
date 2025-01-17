// src/components/ProjectGallery.jsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A clean and professional personal portfolio showcasing my work.",
    img: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with modern UI and seamless checkout.",
    img: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "A responsive dashboard for tracking social media analytics.",
    img: "https://via.placeholder.com/400",
    link: "#",
  },
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
            <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
                />
            </a>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
            </div>
            </div>
        ))}
    </section>
  );
};

export default ProjectGallery;
