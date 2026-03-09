import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    <section id="contact" className="bg-background flex items-center justify-center p-10 py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
      }}></div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-accent font-semibold tracking-widest mb-4 uppercase">Get in touch</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-text mb-4 tracking-tight">Contact Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-8 leading-tight">
              Let's Create Something <span className="text-accent">Amazing</span> Together
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge MERN stack solutions.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition shadow-lg shadow-accent/5">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Email Me</h4>
                  <a
                    href="mailto:muhammad.uzair@example.com"
                    className="text-text hover:text-accent font-bold text-xl transition"
                  >
                    muhammad.uzair@example.com
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h4 className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-6">Social Influence</h4>
                <div className="flex space-x-6 text-2xl">
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
                      whileHover={{ scale: 1.2, y: -5, color: '#3B82F6' }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 transition"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-10 md:p-14 rounded-[40px] border border-white/5 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-2xl font-bold text-text mb-10 border-b border-white/5 pb-6">Send a Message</h3>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-5 rounded-2xl font-semibold border ${submitStatus.type === 'success'
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                      }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-5 bg-background border-2 border-white/5 rounded-2xl outline-none focus:border-accent text-text transition-all peer pt-7 shadow-inner"
                    required
                    disabled={isSubmitting}
                  />
                  <label className="absolute left-5 top-4 text-gray-500 text-xs uppercase font-bold tracking-widest peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal transition-all pointer-events-none">Name</label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-5 bg-background border-2 border-white/5 rounded-2xl outline-none focus:border-accent text-text transition-all peer pt-7 shadow-inner"
                    required
                    disabled={isSubmitting}
                  />
                  <label className="absolute left-5 top-4 text-gray-500 text-xs uppercase font-bold tracking-widest peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal transition-all pointer-events-none">Email Address</label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder=" "
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 bg-background border-2 border-white/5 rounded-2xl outline-none focus:border-accent text-text transition-all peer pt-7 resize-none shadow-inner"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <label className="absolute left-5 top-4 text-gray-500 text-xs uppercase font-bold tracking-widest peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal transition-all pointer-events-none">Message</label>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-6 rounded-2xl font-bold text-white text-lg tracking-widest uppercase transition-all shadow-xl ${isSubmitting
                  ? 'bg-gray-800 cursor-not-allowed opacity-50'
                  : 'bg-accent hover:bg-hover hover:shadow-accent/30'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
