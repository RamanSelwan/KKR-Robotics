
import React, { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaRobot, FaMicrochip } from "react-icons/fa";
import 'animate.css';
import { Link } from "react-router-dom";

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } 
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const services = [
    {
      title: "Empowering Next Generation",
      description:
        "Educational programs and workshops designed to inspire and train the next generation of robotics engineers.",
      icon: <FaGraduationCap size={40} />,
    },
    {
      title: "Autonomous Robots",
      description:
        "Advanced AI-powered robots for industrial automation, logistics, and smart manufacturing solutions.",
      icon: <FaRobot size={40} />,
    },
    {
      title: "Physical Robotics",
      description:
        "Custom robotics solutions for specific industry needs, from prototype to production.",
      icon: <FaMicrochip size={40} />,
    },
  ];

  return (
    <div ref={sectionRef} className="bg-gray-900 text-white py-16 px-6 mt-5 w-full">
      <div className={`text-center mb-12 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-400 mt-2">
          Discover how we're shaping the future through innovative robotics
          solutions and cutting-edge technology.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg hover:shadow-orange-500/50 
                     transition-all duration-300 transform hover:-translate-y-2 ${
                       isVisible ? 'animate__animated animate__fadeIn' : 'opacity-0'
                     }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex justify-center mb-4 text-orange-500 animate-pulse">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
            <Link
            to="/services"
              className="text-orange-500 mt-4 hover:underline flex items-center justify-center group"
            >
              Learn more 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default ServicesSection;
