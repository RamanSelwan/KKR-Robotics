import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assest/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      
        <div>
          <img 
            src={logo} 
            alt="Karthikesh Robotics" 
            className="h-10 mb-2"
          />
          <p className="text-sm leading-6">
            Leading the future of robotics with innovative solutions and
            cutting-edge technology.
          </p>
        </div>

  
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-purple-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services/education" className="hover:text-purple-500">
                Education
              </Link>
            </li>
            <li>
              <Link to="/services/autonomous-robots" className="hover:text-purple-500">
                Autonomous Robots
              </Link>
            </li>
            <li>
              <Link to="/services/custom-solutions" className="hover:text-purple-500">
                Custom Solutions
              </Link>
            </li>
            <li>
              <Link to="/services/consulting" className="hover:text-purple-500">
                Consulting
              </Link>
            </li>
            <li>
              <Link to="/services/support" className="hover:text-purple-500">
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Stay updated with our latest news and updates.
          </p>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-300 px-4 py-2 flex-grow focus:outline-none"
            />
            <button className="bg-purple-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L9.75 15.75M9.75 15.75L5.25 9.75M9.75 15.75H18.75M3 21.75V2.25C3 1.55964 3.55964 1 4.25 1H19.75C20.4404 1 21 1.55964 21 2.25V21.75C21 22.4404 20.4404 23 19.75 23H4.25C3.55964 23 3 22.4404 3 21.75Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <Link to="/social/facebook" className="hover:text-purple-500">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/social/twitter" className="hover:text-purple-500">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/social/linkedin" className="hover:text-purple-500">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="/social/instagram" className="hover:text-purple-500">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © 2025 Karthikesh ❤️ Robotics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
