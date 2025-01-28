import React from 'react'
import { motion } from 'framer-motion'
import Img from "../Assest/IMG@1x.png"
import Img1 from "../Assest/DIVFp1.png"
import Img2 from "../Assest/DIVf2.png"
import Img3 from "../Assest/IMGf3.png"

const Shop = () => {
  return (
    <div className="bg-gray-50 font-sans w-full py-8 overflow-x-hidden">
      {/* Header Section */}
      <motion.header 
        className="flex justify-between items-center py-16 px-8 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">Robotics Education Programs & Workshops</h1>
          <p className="text-lg mb-6">
            Comprehensive robotics training programs designed for all skill levels. Learn from
            industry experts and get hands-on experience with cutting-edge technology.
          </p>
          <div className="flex space-x-4">
            <motion.button 
              className="bg-blue-600 text-white py-2 px-6 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Programs
            </motion.button>
            <motion.button 
              className="bg-gray-200 py-2 px-6 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Info
            </motion.button>
          </div>
        </motion.div>
        <motion.img
          src={Img}
          alt="Robotics Lab"
          className="w-1/2 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.header>

      {/* Featured Programs */}
      <section className="py-16 px-8">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: Img1,
              title: "Industrial Robotics Programming",
              description: "Master industrial robot programming and integration. Perfect for automation engineers and technicians.",
              duration: "12 weeks",
              startDate: "June 15, 2024"
            },
            {
              img: Img2,
              title: "Collaborative Robotics",
              description: "Learn to work with collaborative robots and implement safe human-robot interaction systems.",
              duration: "8 weeks",
              startDate: "July 1, 2024"
            },
            {
              img: Img3,
              title: "Introduction to Robotics",
              description: "Perfect starting point for beginners. Learn fundamentals of robotics and basic programming.",
              duration: "6 weeks",
              startDate: "May 30, 2024"
            }
          ].map((program, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-md rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm mb-4">{program.description}</p>
              <p className="text-sm font-semibold mb-2">Duration: {program.duration}</p>
              <p className="text-sm font-semibold mb-4">Next Start: {program.startDate}</p>
              <motion.button 
                className="bg-black text-white py-2 px-6 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 px-8 bg-gray-100">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our Programs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-4">
              {[
                "Industry-Standard Equipment: Train on the same robots and systems used in modern industry.",
                "Expert Instructors: Learn from experienced professionals with real-world expertise.",
                "Industry Certification: Earn recognized certifications valued by employers."
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <span className="text-blue-600">&#x2713;</span>
                  <p>{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.form 
            className="bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Request Information</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="program">
                Program of Interest
              </label>
              <select
                id="program"
                className="w-full p-2 border rounded-md"
              >
                <option>Industrial Robotics Programming</option>
                <option>Collaborative Robotics</option>
                <option>Introduction to Robotics</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="bg-orange-600 text-white py-2 px-6 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

export default Shop