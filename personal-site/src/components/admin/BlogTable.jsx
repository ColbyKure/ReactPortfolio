import React from "react";
import BlogRow from "./BlogRow";

const BlogTable = ({ blogs, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Date</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => (
          <BlogRow
            key={index}
            blog={blog}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BlogTable;
