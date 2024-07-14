// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Checkout from "./pages/checkout";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import Complete from "./pages/Complete";

const App = () => {
  const [products, setProducts] = useState([]);
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://timbu-get-all-products.reavdev.workers.dev",
          {
            params: {
              organization_id: "5e6c86768597478289bf8386f5b07e25",
              Appid: "ZNPXUNOUSKYWCGD",
              Apikey: "981c1776e1e541e19ec8795bb2d0091120240712230246246806",
            },
          }
        );
        const products = response.data.items;
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product, quantity) => {
  const existingItem = cartItems.find((item) => item.id === product.unique_id);

  if (existingItem) {
    // If the item already exists in the cart, do nothing or handle as needed
    // You might want to notify the user or adjust quantities in a different way
    console.log(`Item ${product.name} is already in the cart.`);
    return;
  }

  // If the item doesn't exist in the cart, add it with the specified quantity
  setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity }]);
};
const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <Router>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-[10vh]">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart cartItems={cartItems}
      setCartItems={setCartItems}
      products={products}
      totalPrice={totalPrice}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/products"
            element={<Products products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} addToCart={addToCart} />}
          />
          <Route path="/checkout" element={<Checkout products={products} cartItems={cartItems} totalPrice={totalPrice} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
