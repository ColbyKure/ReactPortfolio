import React, { useState } from "react";
import BlogTable from "./BlogTable";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const mockBlogs = [
  { title: "First Blog", slug: "first-blog", date: "2025-01-01" },
  { title: "Second Blog", slug: "second-blog", date: "2025-02-01" },
];

const BlogManager = () => {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = (slug) => {
    window.location.href = `/admin/edit/${slug}`;
  };

  const handleDelete = (slug) => {
    setSelectedBlog(slug);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    setBlogs(blogs.filter((blog) => blog.slug !== selectedBlog));
    setSelectedBlog(null);
    setIsModalVisible(false);
  };

  return (
    <div>
      <button
        onClick={() => (window.location.href = "/admin/new")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
      >
        Create New Blog
      </button>
      <BlogTable blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
      <DeleteConfirmationModal
        isVisible={isModalVisible}
        onConfirm={confirmDelete}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default BlogManager;
