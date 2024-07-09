import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import "./index.css";
import Checkout from "./pages/checkout";
import Products from "./pages/Products";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import Complete from "./pages/Complete";
const App = () => {
  
  return (
    <>
    <Router>
    <Navbar/>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-[10vh]">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="products" element={<Products/>} />
            <Route path="details" element={<ProductDetails/>} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/complete" element={<Complete/>}/>
          </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
