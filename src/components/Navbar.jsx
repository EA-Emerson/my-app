import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/search-alt-svgrepo-com.png";
import cart from "../assets/shopping-cart-svgrepo-com.png";
import fav from "../assets/favorite-heart-love-svgrepo-com.png";
import user from "../assets/user-rounded-svgrepo-com.png";
// import { MdFavoriteBorder, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
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
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 py-4 z-50 flex px-[7%] justify-between">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
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
            to="/about"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            Contact
          </Link>
          <Link
            to="/categories"
            className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm flex items-center"
          >
            Categories
          </Link>
        </div>
      </div>
      <div className="flex items-center ">
        <Link
          to="/"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={search} alt="search"/>
        </Link>
        <Link
          to="/"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={fav} alt="favorites"/>
        </Link>
        <Link
          to="/cart"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={cart} alt="cart"/>
        </Link>

        <Link
          to="/profile"
          className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <img className="w-5" src={user} alt="user profile"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
