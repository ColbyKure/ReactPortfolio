import React from "react";

const BlogRow = ({ blog, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
      <td className="border border-gray-300 px-4 py-2">{blog.date}</td>
      <td className="border border-gray-300 px-4 py-2">
        <button
          onClick={() => onEdit(blog.slug)}
          className="text-blue-500 hover:underline mr-4"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(blog.slug)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogRow;
