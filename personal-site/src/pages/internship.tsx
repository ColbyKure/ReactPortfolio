import React from "react";

const InternshipExperience = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Software Engineering Internship</h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Software Engineer Intern @ OmniVision Technologies</h2>
        <p className="mt-2 text-gray-700">
          As a software engineering intern at OmniVision Technologies, I contributed to the automation of testing pipelines, enhanced reporting tools, and developed production-ready features. My work focused on **streamlining development workflows, improving test automation, and supporting real-time monitoring** of internal applications.
        </p>
        <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
          <li>
            Built and optimized Jenkins pipelines to automate test execution, significantly reducing manual testing overhead and accelerating the software release cycle.
          </li>
          <li>
            Developed robust unit test cases to enhance the reliability of core applications, ensuring smooth integration into production environments.
          </li>
          <li>
            Presented and implemented Selenium-based automated testing strategies, leading to **increased efficiency and faster validation of UI and backend functionalities**.
          </li>
          <li>
            Delivered production-ready features aimed at improving transparency in reporting tools, enhancing data accessibility for internal teams.
          </li>
          <li>
            Contributed to **real-time monitoring solutions**, tracking API response times and system health metrics to proactively detect and resolve issues.
          </li>
          <li>
            Assisted in feature updates and enhancements to production systems, including **refinements to reporting dashboards and UI components**.
          </li>
          <li>
            Integrated automated test scripts into the CI/CD pipeline, ensuring high code quality and reducing regression issues in deployment cycles.
          </li>
          <li>
            Collaborated with senior engineers to **refine DevOps strategies**, focusing on infrastructure automation and deployment consistency.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          Through my contributions to test automation, DevOps, and feature development, I improved engineering efficiency and helped optimize the company's software development lifecycle.
        </p>
      </div>
    </div>
  );
};

export default InternshipExperience;
