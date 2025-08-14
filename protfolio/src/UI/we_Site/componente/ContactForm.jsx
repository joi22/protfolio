import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaTelegram } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="bg-glow flex items-center justify-center p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-transparent ">
            <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 font-bold">DO YOU HAVE A </span>
            <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">PROJECT TO DISCUSS?</span>
          </h2>

          <div className="mt-6">
            <h3 className="text-sm font-bold">CONTACT</h3>
            <a href="mailto:web.smn.zty@gmail.com" className="text-blue-300 hover:underline">
              web.smn.zty@gmail.com
            </a>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold">SOCIAL MEDIA</h3>
            <div className="flex space-x-4 mt-2 text-xl text-gray-300">
              <FaLinkedin className="hover:text-white" />
              <FaInstagram className="hover:text-white" />
              <FaEnvelope className="hover:text-white" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="space-y-6">
          <h3 className="text-lg font-semibold">CONTACT FORM</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 bg-transparent border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 hover:from-pink-500 hover:to-cyan-400 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
