import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-900 text-white py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-400 mt-4">
            Have questions about our robotics solutions? We're here to help!
            Fill out the form below and our team will get back to you shortly.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows="5"
                className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?..."
            className="w-full h-64 rounded-lg mb-8"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold">Contact Info</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>📍 123 Robotics Ave, Tech City</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 info@karthikeshrobotics.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Business Hours</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
