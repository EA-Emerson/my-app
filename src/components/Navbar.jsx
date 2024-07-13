import React, { useState } from "react";
import { Link } from "react-router-dom";
import search from "../assets/search-alt-svgrepo-com.png";
import cart from "../assets/shopping-cart-svgrepo-com.png";
import fav from "../assets/favorite-heart-love-svgrepo-com.png";
import user from "../assets/user-rounded-svgrepo-com.png";
import menu from "../assets/menu-svgrepo-com.png";
import close from "../assets/close-svgrepo-com.png";
// import { MdFavoriteBorder, MdShoppingCart } from "react-icons/md";

const Navbar = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setDarkMode(savedTheme === "dark");
  //     document.documentElement.classList.toggle("dark", savedTheme === "dark");
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => {
  //     const newMode = !prevMode;
  //     localStorage.setItem("theme", newMode ? "dark" : "light");
  //     document.documentElement.classList.toggle("dark", newMode);
  //     return newMode;
  //   });
  // };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 py-[3vh] z-50 flex px-[7%] justify-between">
      <button className="md:hidden block" onClick={toggleMenu}>
        {isOpen ? (
          <img className="w-5 h-5" src={close} alt="menu close icon" />
        ) : (
          <img className="w-5 h-5" src={menu} alt="menu icon" />
        )}
      </button>
      {isOpen && (
        <div className="fixed left-0 right-0 bg-white mt-[5vh] rounded-lg shadow-lg">
          <div className="py-2">
            <Link
              to="/"
              className="block md:hidden text-gray-700 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <hr className="border-gray-300" />
            <Link
              to="/"
              className="block text-gray-700 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <hr className="border-gray-300" />
            <Link
              to="/"
              className="block text-gray-700 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <hr className="border-gray-300" />
            <Link
              to="/"
              className="block text-gray-700 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
          </div>
        </div>
      )}

      <h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
        d<span className="text-[#27493E]">EKOR</span>
      </h1>
      <div className="hidden md:block">
        <div className=" flex items-baseline space-6 font-semibold">
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            Categories
          </Link>
        </div>
      </div>
      <div className="flex items-center ">
      <div className="relative">
      <div className="flex items-center">
        <button
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-1 lg:py-2 rounded-md text-sm font-medium"
          onClick={handleSearchClick}
        >
          <img className="w-5" src={search} alt="search" />
        </button>
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white z-10 p-2 border-t-2 border-gray-800 rounded-md shadow-lg mt-2 w-[40vw] md:w-[20vw] lg:w-[15vw] mr-4 md:mr-6 lg:mr-8">
          <input
            type="text"
            name="text"
            className="w-full px-2 py-1 active:border-none active:outline-none text-xs lg:text-base"
            placeholder="Input your search"
          />
            <button
              className="absolute top-2 right-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400"
              onClick={handleCloseClick}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
        <Link
          to="/"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={fav} alt="favorites" />
        </Link>
        <Link
          to="/cart"
          className="relative text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={cart} alt="cart" />
          {/* <div className="absolute top-0 right-0">{cartItems.length}</div> */}
        </Link>

        <Link
          to="/"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={user} alt="user profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
