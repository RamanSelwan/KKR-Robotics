import React from "react";

import { motion } from "framer-motion";

const ContactUsPage = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 40.7128, // New York coordinates
    lng: -74.0060,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div 
          className="bg-white shadow-md rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Please fill out this form or use our contact information below.
          </p>
          <div className="space-y-4 text-gray-600">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong>Address:</strong> 123 Business Street, New York, NY 10001
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong>Phone:</strong> +1 (555) 123-4567
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong>Email:</strong> contact@example.com
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
            </motion.p>
            <motion.div 
              className="flex space-x-4 text-blue-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a href="#" whileHover={{ scale: 1.1 }}><i className="fab fa-facebook-f"></i></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }}><i className="fab fa-twitter"></i></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }}><i className="fab fa-linkedin-in"></i></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }}><i className="fab fa-instagram"></i></motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white shadow-md rounded-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message here..."
                  rows="4"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Location */}
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
        <p className="text-center text-gray-600 mb-8">
          Find us at our headquarters in the heart of New York City
        </p>
        <div className="h-[400px] rounded-lg shadow-md overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?..."
            className="w-full h-64 rounded-lg mb-8"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What are your business hours?",
              answer: "We are open Monday through Friday, 9:00 AM to 5:00 PM Eastern Time."
            },
            {
              question: "How quickly do you respond to inquiries?",
              answer: "We aim to respond to all inquiries within 24 business hours."
            },
            {
              question: "Do you offer emergency support?",
              answer: "Yes, we provide 24/7 emergency support for our premium customers."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-700">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
    </div>
  );
};

export default ContactUsPage;
