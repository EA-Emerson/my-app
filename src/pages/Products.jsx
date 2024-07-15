import React, { useState, useEffect } from "react";
import filter from "../assets/filter-funnel-processing-svgrepo-com.png";
import cart from "../assets/shopping-cart-svgrepo-com.png";
import backToTop from "../assets/top-arrow-svgrepo-com.png"
import { Link } from "react-router-dom";

const Products = ({ products, addToCart }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [activeButton, setActiveButton] = useState(2);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, ">"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="mt-[10vh] py-8 flex flex-col w-4/5 mx-auto">
      <div className="flex justify-between">
        <span>
          <Link to="/" className="text-sm">
            Home
          </Link>
          <span className="text-[#27493E] font-bold text-sm"> / Products</span>
        </span>
        <button className="flex gap-2">
          Filter <img className="mt-1 w-5 h-5" src={filter} alt="filter" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 my-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative text-center mb-7 lg:mb-10"
          >
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
              className="object-cover h-60 sm:h-72 md:h-80 lg:h-96 w-full rounded-xl cursor-pointer"
              alt={product.name}
            />
            <Link
              to="/cart"
              className="absolute top-2 right-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-1 lg:px-4 lg:py-2 rounded-md text-sm font-medium flex items-center transition duration-300 hover:scale-110 hover:bg-gray-200 hover:shadow-lg bg-white bg-opacity-80"
            >
              <img className="w-5" src={cart} alt="cart" />
            </Link>
            <p className="font-semibold pt-2 md:pt-1 lg:pt-2 text-[9px] md:text-xs lg:text-sm truncate w-full">
              {product.name}
            </p>
            <p className="font-semibold pt-1 text-sm lg:text-base">
              {product.current_price &&
                      product.current_price[0] &&
                      product.current_price[0].NGN &&
                      product.current_price[0].NGN[0]
                        ? `NGN${product.current_price[0].NGN[0]}`
                        : `NGN${product.price}`}
            </p>
                            <Link to={`/product/${product.unique_id}`}>
                    <button className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-[9px] md:text-sm lg:text-base transition transform duration-300 hover:bg-[#27493E] hover:text-white">
                      Shop Now
                    </button>
</Link>
            <button onClick={() => handleAddToCart(product)} className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-[9px] md:text-sm lg:text-base transition transform duration-300 hover:bg-[#27493E] block hover:text-white m-auto">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
      <div className="md:p-3 p-2 lg:p-4 rounded-full bg-[#27493E] w-fit cursor-pointer"  onClick={scrollToTop}>
        <img className="md:w-7 md:h-7 w-6 h-6 lg:w-9 lg:h-9" src={backToTop} alt="back to top arrow" />
      </div>
      </div>
      <div className="flex flex-wrap justify-center py-4">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`${
              activeButton === page + 1
                ? "bg-[#27493E] text-white"
                : "text-[#27493E] border-[#27493E] border-2"
            } flex items-center justify-center w-5 h-5 text-xs md:text-base md:w-10 md:h-10 mx-1 md:mx-2 font-semibold rounded-full`}
            onClick={() => handleButtonClick(page + 1)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
