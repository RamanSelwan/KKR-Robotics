import React from "react";

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117] py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex bg-[#161b22] rounded-lg shadow-lg overflow-hidden max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">
            Join the revolution in robotics with KKR Robotics
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Build the robots of tomorrow, today.{" "}
            <span className="">
              Education to innovate and automate the future.
            </span>
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Dive into the world of robotics and automation.{" "}
            <span className="">
              Learn to design, build, and program robots that can change the world.
            </span>
          </p>

       

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-gray-400 text-sm mb-1 block">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Create Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁
                </span>
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁
                </span>
              </div>
            </div>
          </div>
          <button className="w-full py-2 mt-6 bg-orange-500 text-black font-bold rounded-lg focus:outline-none hover:bg-orange-600">
            Create Account
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/6153738/pexels-photo-6153738.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Group Study"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
