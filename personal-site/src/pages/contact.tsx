"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!!!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message." + error, );
    }
  };

  return (
    <div className="mt-20 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>

      {/* Contact Info */}
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-medium">📧 Email: <a href="mailto:colby@example.com" className="text-blue-500">colbykure@gmail.com</a></p>
        <p className="text-lg font-medium">📞 Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (310)502-3373</a></p>
      </div>

      {/* Contact Form */}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 border rounded-lg" required></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Send Message</button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
