import React from "react";

const InternshipExperience = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Software Engineering Internship
      </h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">
          Software Engineer Intern @ OmniVision Technologies
        </h2>
        <p className="mt-2 text-gray-700">
          As a software engineering intern at OmniVision, I worked on **test automation, DevOps improvements, and feature development**. My contributions enhanced software reliability, streamlined workflows, and improved system monitoring.
        </p>

        <h3 className="text-xl font-semibold mt-4">Key Contributions</h3>
        <ul className="list-disc mt-2 pl-5 text-gray-700 space-y-2">
          <li>Automated testing pipelines with Jenkins and Selenium, reducing manual testing time and improving validation speed.</li>
          <li>Developed and integrated unit and functional tests to enhance application stability and ensre proper function.</li>
          <li>Presented on the benfits and costs of adopting a Selenim framework and a basic template to get started.</li>
          <li>Enhanced reporting tools, improving data visualization and accessibility for internal teams.</li>
          <li>Refined automated testing strategies, working on infrastructure reliability and deployment consistency.</li>
          <li>Contributed to UI and backend enhancements, optimizing internal dashboards and reporting tools.</li>
        </ul>

        <p className="mt-4 text-gray-700">
          My internship focused on delivering **scalable automation, efficient testing, and system optimizations**, improving the overall development lifecycle at OmniVision.
        </p>
      </div>
    </div>
  );
};

export default InternshipExperience;
