import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS Configuration
  const SERVICE_ID = 'service_wdhan3b';
  const TEMPLATE_ID = 'template_jaxoo0c';
  const PUBLIC_KEY = 'BO7Cgp4tV_V-OGJm6';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Muhammad Uzair', // Your name
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully!', result.text);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact me directly via email.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-glow flex items-center justify-center p-10 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge MERN stack solutions.
            </p>

            <div className="mt-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-3">CONTACT</h3>
              <a 
                href="mailto:muhammad.uzair@example.com" 
                className="text-red-400 hover:text-red-500 transition"
              >
                muhammad.uzair@example.com
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-white mb-3">SOCIAL MEDIA</h3>
              <div className="flex space-x-4 text-2xl">
                {[
                  { icon: <FaGithub />, href: "#", label: "GitHub" },
                  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                  { icon: <FaTwitter />, href: "#", label: "Twitter" },
                  { icon: <FaFacebook />, href: "#", label: "Facebook" },
                  { icon: <FaInstagram />, href: "#", label: "Instagram" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-white hover:bg-red-500 transition"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">CONTACT FORM</h3>
            
            {/* Status Message */}
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500 text-green-400' 
                    : 'bg-red-500/20 border border-red-500 text-red-400'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-black/50 border-2 border-red-500/50 rounded-lg outline-none focus:border-red-500 text-white placeholder-gray-400 transition"
                required
                disabled={isSubmitting}
              />
            </motion.div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-black/50 border-2 border-red-500/50 rounded-lg outline-none focus:border-red-500 text-white placeholder-gray-400 transition"
                required
                disabled={isSubmitting}
              />
            </motion.div>
            
            <motion.div
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                placeholder="Enter message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-black/50 border-2 border-red-500/50 rounded-lg outline-none focus:border-red-500 text-white placeholder-gray-400 transition resize-none"
                required
                disabled={isSubmitting}
              ></textarea>
            </motion.div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting}
              className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
