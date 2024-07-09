import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700">Feel free to reach out to us...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
