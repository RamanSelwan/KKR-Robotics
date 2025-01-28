import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import ServicesSection from "./component/ServicesSection";
import FeaturedProducts from "./component/FeaturedProducts";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import ThreeScene from "./component/Three";
import { Routes, Route } from 'react-router-dom';
import About from "./component/About";
import Shop from "./component/Shop";
import ContactUsPage from "./component/ContactUsPage";
import Login from "./component/LoginPage";
import Signup from "./component/SignupPage";
import Service from "./component/Service";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 200, y: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="font-openSans relative w-full overflow-x-hidden">
     

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <ThreeScene />
            <ServicesSection />
            <FeaturedProducts />
            <ContactUs />
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Service />} />
      
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
