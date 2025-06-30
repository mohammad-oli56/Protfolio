import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-12"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <form
          data-aos="fade-up"
          action="https://formspree.io/f/yourFormID" // Replace with real Formspree/EmailJS later
          method="POST"
          className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
