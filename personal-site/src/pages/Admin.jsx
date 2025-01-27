import React, { useState } from "react";
import BlogManager from "../components/admin/BlogManager";

const Admin = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      <BlogManager />
    </div>
  );
};

export default Admin;
