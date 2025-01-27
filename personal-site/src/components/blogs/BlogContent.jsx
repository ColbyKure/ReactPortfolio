import React from "react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ content }) => {
  return (
    <article className="prose max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default BlogContent;
