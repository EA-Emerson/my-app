// src/components/Payment.js
import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="container w-[86vw] mx-[auto] px-4 py-8">
      <Link className="text-sm" to="/cart">
        Cart
      </Link>{" "}
      /{" "}
      <Link className=" text-sm " to="/checkout">
        Checkout
      </Link>{" "}
      /{" "}
      <Link className="text-sm text-[#27493E] font-bold" to="/payment">
        Payment
      </Link>{" "}
      /{" "}
      <Link className="text-sm" to="/complete">
        Complete
      </Link>
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-lg font-bold mb-4">Select Payment Method</h2>
          <form className="space-y-4">
            <div className="p-4 border rounded-lg bg-[#FAFAFA]">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-xs accent-[#27493E] text-[#27493E]"
                  defaultChecked
                />
                <span className="ml-2 font-bold">Credit Card</span>
              </label>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-xs w-full border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-xs w-full border rounded-md"
                    placeholder="Enter your card number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-xs w-full border rounded-md"
                    placeholder="Enter the expiry date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Enter the CVV"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio accent-[#27493E] text-[#27493E]"
                />
                <span className="ml-2">PayPal</span>
              </label>
            </div>
            <div className="p-4 border rounded-lg">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio accent-[#27493E]  text-[#27493E]"
                />
                <span className="ml-2">Venmo</span>
              </label>
            </div>
            <div className="p-4 border rounded-lg">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio accent-[#27493E] text-[#27493E]"
                />
                <span className="ml-2">Bank Transfer</span>
              </label>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 bg-[#FAF7F2] p-6 rounded-lg mt-6 md:mt-0">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm">$200</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Shipping fee</span>
            <span className="text-sm">$80</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-sm">Total</span>
            <span className="text-sm">$280</span>
          </div>
          <Link to="/complete">
            <button className="text-sm  w-full bg-[#27493E] text-white py-2 rounded-lg">
              Checkout Payment ($280)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
