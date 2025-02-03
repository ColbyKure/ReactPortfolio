import React from "react";

const BlackDuckExperience = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">BlackDuck Software Management</h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Software Engineer @ OmniVision Technologies</h2>
        <p className="mt-2 text-gray-700">
          As the primary user and administrator of BlackDuck at OmniVision Technologies, I managed the company’s BlackDuck software instance, ensuring seamless deployment, maintenance, and compliance. I played a key role in securing and monitoring the organization’s open-source dependencies, mitigating vulnerabilities, and ensuring that BlackDuck was fully integrated into our DevSecOps pipeline.
        </p>
        <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
          <li>
            Deployed and managed BlackDuck using Docker Swarm, automating the orchestration and scaling of services for high availability and fault tolerance.
          </li>
          <li>
            Integrated BlackDuck with the company's employee authentication system, enabling secure access control and compliance monitoring across multiple teams.
          </li>
          <li>
            Built and maintained detailed documentation for deploying, configuring, and running BlackDuck, ensuring streamlined adoption and troubleshooting within the organization.
          </li>
          <li>
            Monitored security scans, analyzed vulnerability reports, and collaborated with development teams to remediate security risks in open-source software dependencies.
          </li>
          <li>
            Conducted quarterly meetings with Synopsys’ support team to review our software instance, ensuring optimal performance, version compliance, and security updates.
          </li>
          <li>
            Automated BlackDuck security scanning in the CI/CD pipeline, enhancing proactive vulnerability detection and enforcing compliance with corporate security policies.
          </li>
          <li>
            Optimized system performance by configuring resource allocation and monitoring containerized instances to ensure efficient use of company server resources.
          </li>
          <li>
            Assisted internal teams in interpreting BlackDuck vulnerability reports and implementing best practices for open-source security management.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          Through my expertise in deploying and maintaining BlackDuck, I enabled OmniVision Technologies to proactively manage software security risks, improve compliance workflows, and maintain a secure, scalable, and well-documented DevSecOps environment.
        </p>
      </div>
    </div>
  );
};

export default BlackDuckExperience;
