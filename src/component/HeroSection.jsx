import React from "react";

import { FaArrowRight } from "react-icons/fa";
import "animate.css";


function HeroSection() {
  return (
    <div className="h-[1200px] relative">
      <div className="absolute inset-0">
        {/* <ThreeScene /> */}
      </div>
      <div className="absolute inset-0 bg-black/56"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-left text-white px-4">
          <h1 className="text-2xl md:text-6xl mb-4 drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s font-extrabold">
            Pioneering the Future of Robotics
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            Empowering the next generation with cutting-edge autonomous robots
            and innovative solutions.
          </p>
          <div className=" flex items-center animate__animated animate__fadeInRight animate__delay-2s">
            <button className="before:ease relative h-12 w-40 overflow-hidden border rounded-lg border-orange-500 bg-orange-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Get Started</span>
            </button>

            <button className="flex items-center justify-center gap-2 before:ease relative ml-10 h-12 w-40 overflow-hidden border rounded-lg border-orange-500  text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Watch Demo</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
