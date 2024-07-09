import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Checkout from "./checkout";
import favorite from "../assets/favorite-heart-love-svgrepo-com.png";
import del from "../assets/delete-svgrepo-com.png";

import elephantTusk from "../assets/weird statues.png";

import roundNestingTable from "../assets/center table.png";
import MoreProducts from "../components/MoreProducts";
const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Round Lift Nesting Table",
      price: 100,
      image: roundNestingTable,
    },
    { id: 2, name: "Elephant Tusk", price: 100, image: elephantTusk },
  ];
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: true }), {})
  );
  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
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

  const selectedItems = items.filter((item) => checkedItems[item.id]);
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );
  const totalCheckedItems = selectedItems.length;
  return (
    <div>
      <main className="container w-[86vw] mx-[auto] lg:px-4 pt-8">
        <div>
          <span className="text-sm font-bold text-[#27493E]">Cart / </span>
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
        <div className="lg:flex-row flex w-[full] flex-col lg:px-4 py-4 h-fit lg:h-[40vh] space-x-10">
          <div className="w-full lg:w-3/5 h-full flex flex-col justify-between space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex w-full items-center">
                <input
                  type="checkbox"
                  checked={checkedItems[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    borderColor: "#27493E",
                    accentColor: "#27493E",
                  }}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-full md:w-20 lg:w-24 rounded-md lg:rounded-lg mr-2"
                />

                <div className="flex w-full  flex-col items-start">
                  <span className="mr-2 font-semibold text-xs md:text-base lg:text-lg">
                    {item.name}
                  </span>
                  <div className="w-full lg:w-[30vw] flex justify-between my-2">
                    <span className=" font-bold text-xs md:text-base lg:text-lg">${item.price}</span>
                    <div className="flex space-x-10">
                      <button>
                        <img className=" h-5 " src={del} alt="del" />
                      </button>
                      <button>
                        <img className=" h-5" src={favorite} alt="favorite" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center align-middle justify-center space-x-6 border-[#27493E] w-fit lg:rounded-md rounded-sm px-1 lg:px-3 border-[1px]">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={quantities[item.id] === 1} className="text-[10px] md:text-xs lg:text-sm"
                    >
                      -
                    </button>
                    <span className="text-[10px] md:text-xs lg:text-sm">{quantities[item.id]}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="text-[10px] md:text-xs lg:text-sm">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="lg:hidden block mt-6 lg:mt-6 p-4 self-center bg-[#FAF7F2] rounded-lg h-full w-full">
            <div className="flex md:items-center md:text-center justify-between mb-2">
              <span className="font-semibold text-left text-xl md:text-2xl lg:text-3xl m-auto">
                Order Summary
              </span>
            </div>
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <span className="text-[10px] md:text-xs lg:text-sm">
                  {item.name} ({quantities[item.id]})
                </span>
                <span className="text-[10px] md:text-xs lg:text-sm">${item.price * quantities[item.id]}</span>
              </div>
            ))}
            <div className="flex items-center justify-between font-bold">
              <span className="text-[10px] md:text-xs lg:text-sm">Total:</span>
              <span className="text-[10px] md:text-xs lg:text-sm">${totalPrice}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-4 text-[10px] md:text-xs lg:text-sm px-[5vw] py-3 text-center bg-[#27493E] text-white rounded-lg">
                Checkout ({totalCheckedItems})
              </button>
            </Link>
          </div>
          </div>

          <div className="lg:w-2/5 lg:block hidden mt-6 lg:mt-6 p-4 self-center bg-[#FAF7F2] rounded-lg h-full w-full">
            <div className="flex md:items-center md:text-center justify-between mb-2">
              <span className="font-semibold text-left text-xl md:text-2xl lg:text-3xl m-auto">
                Order Summary
              </span>
            </div>
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <span className="text-[10px] md:text-xs lg:text-sm">
                  {item.name} ({quantities[item.id]})
                </span>
                <span className="text-[10px] md:text-xs lg:text-sm">${item.price * quantities[item.id]}</span>
              </div>
            ))}
            <div className="flex items-center justify-between font-bold">
              <span className="text-[10px] md:text-xs lg:text-sm">Total:</span>
              <span className="text-[10px] md:text-xs lg:text-sm">${totalPrice}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-4 text-[10px] md:text-xs lg:text-sm px-[5vw] py-3 text-center bg-[#27493E] text-white rounded-lg">
                Checkout ({totalCheckedItems})
              </button>
            </Link>
          </div>
        </div>
      </main>
      <MoreProducts />
    </div>
  );
};

export default Cart;
