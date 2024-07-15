import React, { useState } from "react";
import { Link } from "react-router-dom";
import favorite from "../assets/favorite-heart-love-svgrepo-com.png";
import del from "../assets/delete-svgrepo-com.png";
import MoreProducts from "../components/MoreProducts";
import back from "../assets/back-arrow-navigation-svgrepo-com.png";

const Cart = ({ cartItems, products, totalPrice, setCartItems }) => {
  const [checkedItems, setCheckedItems] = useState(
    cartItems.reduce((acc, cartItem) => ({ ...acc, [cartItem.id]: true }), {})
  );
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, cartItem) => ({ ...acc, [cartItem.id]: 1 }), {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleQuantityChange = (id, amount) => {
    setQuantities((prevState) => ({
      ...prevState,
      [id]: Math.max(1, prevState[id] + amount),
    }));
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const selectedItems = cartItems.filter(
    (cartItem) => checkedItems[cartItem.id]
  );

  totalPrice = selectedItems.reduce((total, cartItem) => {
    const price =
      cartItem.current_price &&
      cartItem.current_price[0] &&
      cartItem.current_price[0].NGN &&
      cartItem.current_price[0].NGN[0]
        ? cartItem.current_price[0].NGN[0]
        : cartItem.price; // Fallback to original price if dynamic price not available

    const itemTotalPrice = price * quantities[cartItem.id];

    // Update the cart item price directly for display purposes
    cartItem.displayPrice = itemTotalPrice;

    return total + itemTotalPrice;
  }, 0);

  const totalCheckedItems = selectedItems.length;

  return (
    <div>
      <main className="container w-full mx-auto lg:px-4 pt-8">
        <div>
          <span className="text-sm font-bold text-[#27493E]">
            <Link
              to="/"
              className="text-gray-800 inline-flex dark:text-gray-100 px-2 hover:text-gray-600 dark:hover:text-gray-400 rounded-md text-sm font-medium items-center"
            >
              <img className="w-4 h-3" src={back} alt="back to home" />
            </Link>
            Cart /{" "}
          </span>
          <Link to="/checkout" className="text-sm">
            Checkout
          </Link>{" "}
          /{" "}
          <Link to="/payment" className="text-sm">
            Payment
          </Link>{" "}
          /{" "}
          <Link to="/complete" className="text-sm">
            Complete
          </Link>
        </div>
        <div className="lg:flex lg:flex-row flex-col lg:px-4 py-4 space-x-10">
          <div className="lg:w-3/5 w-full flex flex-col space-y-4">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedItems[cartItem.id]}
                  onChange={() => handleCheckboxChange(cartItem.id)}
                  className="mr-2"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    borderColor: "#27493E",
                  }}
                />
                <img
                  src={`https://api.timbu.cloud/images/${cartItem.photos[0]?.url}`}
                  alt={cartItem.name}
                  className="w-16 md:w-20 lg:w-24 h-auto rounded-md lg:rounded-lg mr-2"
                />

                <div className="flex flex-col items-start w-full">
                  <span className="font-semibold text-xs md:text-base lg:text-lg">
                    {cartItem.name}
                  </span>
                  <div className="flex justify-between my-2 w-full">
                    <span className="font-bold text-xs md:text-base lg:text-lg">
                      {cartItem.current_price &&
                      cartItem.current_price[0] &&
                      cartItem.current_price[0].NGN &&
                      cartItem.current_price[0].NGN[0]
                        ? `NGN${cartItem.current_price[0].NGN[0]}`
                        : `NGN${cartItem.price}`}
                    </span>
                    <div className="flex space-x-4">
                      <button onClick={() => handleDelete(cartItem.id)}>
                        <img className="h-5" src={del} alt="del" />
                      </button>
                      <button>
                        <img className="h-5" src={favorite} alt="favorite" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4 border-[#27493E] w-fit rounded-md px-2 border-[1px]">
                    <button
                      onClick={() => handleQuantityChange(cartItem.id, -1)}
                      disabled={quantities[cartItem.id] === 1}
                      className="text-[10px] md:text-sm lg:text-base"
                    >
                      -
                    </button>
                    <span className="text-[10px] md:text-sm lg:text-base">
                      {quantities[cartItem.id]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(cartItem.id, 1)}
                      className="text-[10px] md:text-sm lg:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="lg:hidden block mt-6 p-4 self-center bg-[#FAF7F2] rounded-lg w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-left text-xl md:text-2xl lg:text-3xl">
                  Order Summary
                </span>
              </div>
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-2"
                >
                  <span className="text-[10px] md:text-sm lg:text-base">
                    {item.name} ({quantities[item.id]})
                  </span>
                  <span className="text-[10px] md:text-sm lg:text-base">
                    NGN{item.displayPrice}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between font-bold">
                <span className="text-[10px] md:text-sm lg:text-base">
                  Total:
                </span>
                <span className="text-[10px] md:text-sm lg:text-base">
                  NGN{totalPrice}
                </span>
              </div>
              <Link to="/checkout">
                <button className="w-full mt-4 text-[10px] md:text-sm lg:text-base px-[5vw] py-3 text-center bg-[#27493E] text-white rounded-lg">
                  Checkout ({totalCheckedItems})
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5 lg:block hidden mt-6 p-4 self-center bg-[#FAF7F2] rounded-lg w-full">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-left text-xl md:text-2xl lg:text-3xl">
                Order Summary
              </span>
            </div>
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <span className="text-[10px] md:text-sm lg:text-base">
                  {item.name} ({quantities[item.id]})
                </span>
                <span className="text-[10px] md:text-sm lg:text-base">
                  NGN{item.displayPrice}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between font-bold">
              <span className="text-[10px] md:text-sm lg:text-base">
                Total:
              </span>
              <span className="text-[10px] md:text-sm lg:text-base">
                NGN{totalPrice}
              </span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-4 text-[10px] md:text-sm lg:text-base px-[5vw] py-3 text-center bg-[#27493E] text-white rounded-lg">
                Checkout ({totalCheckedItems})
              </button>
            </Link>
          </div>
        </div>
      </main>
      <MoreProducts products={products} />
    </div>
  );
};

export default Cart;
