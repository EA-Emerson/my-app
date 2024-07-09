// src/components/Complete.js
import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/check-svgrepo-com.png";

const Complete = () => {
  return (
    <div className="container w-[86vw] mx-[auto] px-4 py-8">
      <div className=" rounded-xl m-auto bg-[#FAF7F2] p-6 flex flex-col items-center pt-12 h-fit w-2/3 md:w-2/3 lg:w-1/3">
        <div className="w-20 h-20 bg-[#27493E] rounded-full p-4 flex items-center justify-center my-12 mx-auto">
          <img src={check} alt="payment successful" />
        </div>
        <p className="text-xs px-6 text-center mb-12">
          Your order has been successfully confirmed. Kindly download your order
          receipt from the registered email you entered
        </p>
        <Link to="/products">
          <button className="px-[5vw] bg-[#27493E] text-white py-3 rounded-lg text-sm">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Complete;
