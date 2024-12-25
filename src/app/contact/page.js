'use client'
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to your backend.
    alert("Message sent! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-lg leading-7 text-gray-600">
            We'd love to hear from you! Whether you have a question, need support, or
            want to discuss a project, feel free to reach out to us.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
