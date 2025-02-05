import React from "react";

const ElearningPlatform = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">E-Learning Platform Development</h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Software Engineer @ OmniVision Technologies</h2>
        <p className="mt-2 text-gray-700">
          Led the development of a full-stack E-Learning platform for OmniVision Technologies, enabling HR to manage training materials, automate compliance tracking, and streamline employee learning. Built using React, Django, and PostgreSQL, the platform was fully containerized with Docker and deployed within the company’s infrastructure. Over the course of five weeks, worked with a team of five engineers to design, build, and launch the platform from the ground up.
        </p>
        <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
          <li>
            Designed and developed a role-based authentication system, allowing employees to log in using their Employee ID and securely access personalized training content.
          </li>
          <li>
            Built a video hosting and management system, enabling HR to upload, organize, and assign training materials to employees dynamically.
          </li>
          <li>
            Developed an interactive quiz system to assess employee knowledge post-training, with automated grading and result tracking.
          </li>
          <li>
            Implemented automated certificate generation upon quiz completion, with notifications sent to employees and HR to confirm compliance.
          </li>
          <li>
            Integrated a reporting dashboard for HR administrators to track employee progress, monitor course completion rates, and send automated reminders for overdue training.
          </li>
          <li>
            Architected a PostgreSQL database schema optimized for training session storage, quiz results, and audit logs to ensure data integrity and fast query performance.
          </li>
          <li>
            Deployed the application using Docker containers for consistency across development, testing, and production environments.
          </li>
          <li>
            Configured CI/CD pipelines to automate testing and deployment, ensuring rapid and reliable feature releases while maintaining system stability.
          </li>
          <li>
            Implemented security best practices, including data encryption, secure API endpoints, and user access control policies to protect sensitive HR and employee information.
          </li>
          <li>
            Led cross-team collaboration between HR, IT, and engineering teams, ensuring smooth platform adoption and seamless integration with existing HR workflows.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          This platform revolutionized OmniVision&apos;s internal training process, improving employee engagement, ensuring compliance with yearly training requirements, and providing HR with the tools needed for efficient training management and reporting.
        </p>
      </div>
    </div>
  );
};

export default ElearningPlatform;
