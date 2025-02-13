import React from "react";

const CustomSalesDash = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Custom Sales Dashboard and DevOps Pipeline</h1>

      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Software Engineer @ OmniVision Technologies</h2>
        <p className="mt-2 text-gray-700">
          Architected and developed a custom sales dashboard and reporting tool, enabling real-time data analytics, visualization, and role-based access control for multiple user groups, including product marketing managers, sales representatives, managers, and administrators. Designed and maintained the end-to-end DevOps pipeline to automate testing and deployment, ensuring seamless integration and delivery to production.
        </p>
        <ul className="list-disc mt-4 pl-5 text-gray-700 space-y-2">
          <li>
            Designed and implemented a role-based access control system that provided secure and streamlined access to specific dashboard features based on user roles.
          </li>
          <li>
            Developed dynamic reporting modules that allowed users to generate custom, on-demand sales reports using filters such as region, product category, and revenue trends.
          </li>
          <li>
            Integrated real-time analytics and data visualization using React, Chart.js, and D3.js, enabling sales teams to track key performance indicators, performance trends, and revenue growth in an interactive format.
          </li>
          <li>
            Optimized database performance by implementing PostgreSQL indexing and caching strategies, reducing query execution time by 40 percent for large-scale data retrieval.
          </li>
          <li>
            Built RESTful APIs with Django to securely fetch, update, and analyze sales data, ensuring scalability and performance across thousands of transactions.
          </li>
          <li>
            Implemented authentication and security best practices, including JWT-based authentication, OAuth for third-party integrations, and audit logging for compliance tracking.
          </li>
          <li>
            Built and maintained a Jenkins-based DevOps pipeline that automated testing, integration, and deployment to production, significantly reducing deployment time and minimizing manual intervention.
          </li>
          <li>
            Configured continuous integration workflows to run automated unit, integration, and end-to-end tests before deployment, ensuring high code quality and stability.
          </li>
          <li>
            Led collaboration between engineering, DevOps, and product teams, ensuring seamless alignment of business objectives with technical implementation.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          This scalable and enterprise-grade dashboard, coupled with a fully automated deployment pipeline, streamlined data-driven decision-making across multiple teams while enhancing operational efficiency, reporting accuracy, and security compliance within the organization.
        </p>
      </div>
    </div>
  );
};

export default CustomSalesDash;
