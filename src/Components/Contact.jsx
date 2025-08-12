import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (name, email, message should not be empty)
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    // Here you can add your form submit logic (API call, email service etc.)
    // For now just show success toast

    toast.success("Successfully sent!");

    // Optionally, reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#faf6ef] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black mb-4">Contact Me</h1>

        {/* Email link */}
        <a
          href="mailto:olimohammad286@gmail.com"
          className="text-3xl font-semibold text-blue-600 hover:underline"
        >
          olimohammad286@gmail.com
        </a>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 mb-10">
          Feel free to contact me with any inquiries or questions!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-blue-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-blue-600 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
