import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#faf6ef] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black mb-4">Contact Me</h1>

        {/* Email link */}
        <a
          href="mailto:hello@dividesign.com"
          className="text-3xl font-semibold text-blue-600 hover:underline"
        >
          hello@dividesign.com
        </a>

        {/* Subtitle */}
        <p className="text-gray-500 mt-2 mb-10">
          Feel free to contact me with any inquiries or questions!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-blue-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-blue-600 mb-1">Message</label>
            <textarea
              rows="4"
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

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-blue-600 text-xl">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Dribbble">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
