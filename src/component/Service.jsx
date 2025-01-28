import React from "react";

const Service = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">
            Transform Your Business with Our Expert Services
          </h1>
          <p className="mt-4 text-gray-600">
            We provide innovative solutions to help your business grow and
            succeed in today's competitive market.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-md">
            Get Started
          </button>
        </div>
        <div className="md:w-1/4 py-10 ">
          <img
            src="https://media.istockphoto.com/id/1198086928/photo/artificial-intelligence.jpg?s=612x612&w=0&k=20&c=golXSzeEz8J4RlHZX8ZdZRJWgreCPhTVS5RmIxypMK4="
            alt="Hero"
            className="w-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
        <div className="flex justify-center gap-16">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Business Strategy",
    description:
      "Develop comprehensive business strategies to achieve organizational goals.",
  },
  {
    title: "Digital Solutions",
    description:
      "Custom software development and digital transformation services.",
  },
  {
    title: "Marketing Services",
    description: "Strategic marketing campaigns to boost your market presence.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "50+", label: "Expert Team" },
];

export default Service;
