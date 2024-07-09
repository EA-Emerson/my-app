import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          We are a leading company in home decor...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
