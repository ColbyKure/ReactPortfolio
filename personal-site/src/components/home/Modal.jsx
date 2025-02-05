import { useEffect } from "react";
import { motion } from "framer-motion";

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 rounded-md mb-6 object-cover"
        />

        {/* Title & Description */}
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>

        {/* Dynamic Content */}
        <div className="text-gray-700 text-lg">{project.content}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
