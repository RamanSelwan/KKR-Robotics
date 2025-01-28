import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assest/logo.png";
import { BiMenuAltRight } from "react-icons/bi";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const loginhandler = () => {
    navigate("/login");
  };
  const signuphandler = () => {
    navigate("/signup");
  };

  const handleNavigation = (item) => {
    if (item === "Home") {
      navigate("/");
    } else {
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // Close the menu after navigating
  };

  return (
    <>
      <nav className="flex items-center justify-between p-2 bg-gray-800 text-white fixed top-0 w-full z-50">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="KKR Logo"
              className="h-12 w-auto object-contain"
              onClick={() => handleNavigation("Home")}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {["Home", "Services", "Shop", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => handleNavigation(item)}
                className="relative hover:text-gray-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            {menuOpen  ? <FiX/>  : <BiMenuAltRight />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 text-center space-y-6 py-4 md:hidden">
            {["Home", "Services", "Shop", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => handleNavigation(item)}
                  className="block text-white hover:text-gray-400"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={loginhandler}
                className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={signuphandler}
                className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Sign Up
              </button>
            </li>
          </ul>
        )}

        {/* Cart and Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <IoCart className="text-4xl text-gray-400" />
          <button
            onClick={loginhandler}
            className="bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg"
          >
            Login
          </button>
          <button
            onClick={signuphandler}
            className="bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
