import React from "react";

const AutomatedReportingExperience = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Automated Reporting System @ OmniVision
      </h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          At OmniVision, I developed an automated reporting system to streamline weekly sales data processing. Using APIs, scheduled cron jobs, and Celery, I automated data collection and report generation, ensuring timely and accurate insights for management.
        </p>

        <h3 className="text-xl font-semibold mb-2">Key Contributions</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>API Development:</strong> Built an API-driven reporting system that automates data extraction and scheduling.
          </li>
          <li>
            <strong>Automated Report Generation:</strong> Designed workflows to consolidate and distribute weekly sales reports via email.
          </li>
          <li>
            <strong>Data Validation & Accuracy:</strong> Implemented data-cleaning processes to eliminate inconsistencies and improve reliability.
          </li>
          <li>
            <strong>Performance Monitoring:</strong> Set up monitoring and logging to detect and resolve issues proactively.
          </li>
          <li>
            <strong>BI Integration:</strong> Extracted key insights from BI tools to enhance reporting depth and usability.
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          This system reduced manual workload, minimized errors, and improved data accessibility for decision-makers. It reinforced best practices in automation, data management, and workflow efficiency.
        </p>
      </div>
    </div>
  );
};

export default AutomatedReportingExperience;
