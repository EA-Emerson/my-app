import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Categories</h1>
        <p className="text-gray-700">Explore our diverse categories...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
