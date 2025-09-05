import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }



    toast.success("Successfully sent!");


    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#faf6ef] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black mb-4">Contact Me</h1>


        <a
          href="mailto:olimohammad286@gmail.com"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 font-semibold text-blue-600 hover:underline break-words text-center sm:text-left"
        >
          olimohammad286@gmail.com
        </a>


        <p className="text-gray-500 mt-2 mb-10">
          Feel free to contact me with any inquiries or questions!
        </p>


        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
     
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

          
          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 border-blue-600 text-blue-600 px-6 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </form>


        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
