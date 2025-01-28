
import React, { useEffect, useRef, useState } from "react";
import 'animate.css';

function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const products = [
    {
      name: "Industrial Robot Arm",
      description: "6-axis robotic arm with precision control",
      price: "$4,999",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3R8ZW58MHx8MHx8fDI%3D",
    },
    {
      name: "Smart Controller Board",
      description: "Advanced robotics control system",
      price: "$299",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Autonomous Mobile Robot",
      description: "Smart navigation and mapping system",
      price: "$1,999",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90fGVufDB8fDB8fHwy",
    },
    {
      name: "Advanced Sensor Kit",
      description: "Complete set of robotic sensors",
      price: "$499",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90fGVufDB8fDB8fHwy",
    },
  ];
      

  return (
    <div ref={sectionRef} className="bg-gray-900 text-white py-16 px-6 w-full" >
      <div className={`text-center mb-12 transition-all duration-700 ${
        isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'
      }`}>
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <p className="text-gray-400 mt-2">
          Browse our selection of advanced robotics components and complete solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/50 
                       transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                         isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
                       }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold hover:text-orange-500 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-400 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 
                                 transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                                 hover:shadow-orange-500/50 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
