// src/components/Projects.jsx
import React from 'react';

const projects = [
  { title: 'Project One', description: 'A brief description of this amazing project.', img: 'https://via.placeholder.com/400' },
  { title: 'Project Two', description: 'Another great project to showcase.', img: 'https://via.placeholder.com/400' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img src={project.img} alt={project.title} className="rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
