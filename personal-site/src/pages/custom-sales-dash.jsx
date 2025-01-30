import React from "react";

const CustomSalesDash = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Work Experience</h1>

      {/* OmniVision Experience */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Software Engineer - OmniVision Technologies</h2>
        <p className="mt-2 text-gray-700">
          Developed and optimized backend services for the **SIS Application**, using **NestJS, PostgreSQL, and microservices architecture**. Focused on authentication, API development, and database optimizations.
        </p>
      </div>

      {/* Custom Sales Dashboard */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Custom Sales Dashboard & Reporting Tool</h2>
        <p className="mt-2 text-gray-700">
          Designed and implemented a **custom dashboard** to visualize sales data, integrate **real-time analytics**, and generate custom reports for business insights.
        </p>
      </div>
    </div>
  );
};

export default CustomSalesDash;
