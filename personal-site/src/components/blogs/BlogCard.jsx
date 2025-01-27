import React from "react";

const BlogCard = ({ title, description, date, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <p className="text-gray-500 text-xs mb-4">{date}</p>
      <a
        href={`/blogs/${slug}`}
        className="text-blue-500 hover:underline font-medium"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
