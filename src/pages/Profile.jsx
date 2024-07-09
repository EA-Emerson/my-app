import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <p className="text-gray-700">Your profile details...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
