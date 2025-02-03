import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "OmniVision Technologies",
      location: "Irvine, CA",
      description: [
        "Developed multiple full-stack React web applications for 1000 users, with a focus on efficient, user-friendly interfaces.",
        "Managed CI/CD pipeline to automate testing and deployment for fast and reliable feature releases, supporting consistent updates across different offices.",
        "Containerized applications using Docker, enhancing scalability and deployment efficiency on company servers.",
        "Designed and maintained a REST API for automated sales data processing and building of quarterly forecasts.",
        "Configured dynamic user permissions to manage feature access, enhancing application security and user experience.",
        "Implemented and maintained BlackDuck for open-source security management, ensuring compliance with internal policies and industry standards.",
        "Deployed and managed BlackDuck using Docker Swarm, integrating it with internal authentication systems for secure access control.",
        "Created and implemented GUIs with C++ and Python using the Qt framework to assist the algorithm team.",
        "Built an internal dashboard to monitor system health and application uptime across multiple environments.",
        "Supported sales database management by building an app that aggregates and reports on weekly sales orders."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "OmniVision Technologies",
      location: "Santa Clara, CA",
      description: [
        "Built Jenkins pipelines to automate test execution post-code updates, speeding up development cycles.",
        "Presented technical advantages of Selenium for automated testing, contributing to team adoption of more efficient tools.",
        "Delivered production-ready features focused on enhancing transparency in reporting tools.",
        "Developed robust unit tests, supporting the reliability and safety of key applications.",
        "Contributed to feature updates in production environments, including enhancements to reporting tools and UI options.",
        "Developed unit test cases to ensure reliable functionality in web applications, contributing to robust solutions.",
        "Assisted in the implementation of an internal monitoring system to track API response times and server health.",
        "Collaborated with senior engineers to refine the company’s DevOps strategy, focusing on automation and continuous integration."
      ]
    }
  ];

  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Work Experience</h1>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">{experience.title}</h2>
          <h3 className="text-lg text-gray-600">{experience.company} - {experience.location}</h3>
          <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
            {experience.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
