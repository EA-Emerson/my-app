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
      <main className="container w-[86vw] mx-[auto] px-4 py-8">
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
        <div className="flex p-4 h-[40vh] space-x-10">
          <div className="w-3/5 h-full flex flex-col justify-between">
            {items.map((item) => (
              <div key={item.id} className="flex items-center ">
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
                  className="w-24 rounded-lg mr-2"
                />

                <div className="flex ml-4 flex-col items-start">
                  <span className="mr-2 font-semibold text-lg">
                    {item.name}
                  </span>
                  <div className="w-[30vw] flex justify-between my-2">
                    <span className=" font-bold text-xl">${item.price}</span>
                    <div className="flex space-x-10">
                      <button>
                        <img className=" h-5 " src={del} alt="del" />
                      </button>
                      <button>
                        <img className=" h-5" src={favorite} alt="favorite" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center align-middle justify-center space-x-6 border-[#27493E] w-fit rounded-md px-3 border-[1px]">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={quantities[item.id] === 1}
                    >
                      -
                    </button>
                    <span className="">{quantities[item.id]}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-2/5 p-4 bg-[#FAF7F2] rounded-lg h-full">
            <div className="flex items-center text-center justify-between mb-2">
              <span className="font-semibold text-3xl m-auto">
                Order Summary
              </span>
            </div>
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-2"
              >
                <span>
                  {item.name} ({quantities[item.id]})
                </span>
                <span>${item.price * quantities[item.id]}</span>
              </div>
            ))}
            <div className="flex items-center justify-between font-bold">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-4 px-[5vw] py-3 text-center bg-[#27493E] text-white rounded-lg">
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
