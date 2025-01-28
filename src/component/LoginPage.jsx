import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0e0f18] text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between bg-[#121424] rounded-2xl p-8 shadow-lg w-full max-w-4xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-white mb-2">
            Welcome Back to KKR Robotics
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Continue your journey in building the robots of tomorrow.{" "}
            <span className="text-blue-400 italic">
              Innovate and automate the future with us.
            </span>
          </p>
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded-lg bg-[#1a1c2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full p-3 rounded-lg bg-[#1a1c2a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-right">
              <Link to="/forget-password" className="text-blue-400 text-sm hover:underline">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="hidden md:block w-full  md:w-1/2 px-10">
          <img
            src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Login Illustration"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
