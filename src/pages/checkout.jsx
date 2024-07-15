import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  // Calculate total price considering quantities
  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const price =
        item.current_price &&
        item.current_price[0] &&
        item.current_price[0].NGN &&
        item.current_price[0].NGN[0]
          ? parseFloat(item.current_price[0].NGN[0])
          : parseFloat(item.price);
      return acc + price * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const shippingCost = 80; // Default shipping cost
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="container w-[86vw] mx-[auto] px-4 py-8">
      <div>
        <Link className="text-sm" to="/cart">
          Cart
        </Link>{" "}
        /{" "}
        <Link className="font-bold text-sm text-[#27493E]" to="/checkout">
          Checkout
        </Link>{" "}
        /{" "}
        <Link className="text-sm" to="/payment">
          Payment
        </Link>{" "}
        /{" "}
        <Link className="text-sm" to="/complete">
          Complete
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-2/3">
        <form className="space-y-4">
            <div>
              <label className="block font-semibold">Full Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full text-xs md:w-3/4 border rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block font-semibold">Email Address</label>
              <input
                type="email"
                className="mt-1 p-2  text-xs w-full md:w-3/4 border rounded-md"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block font-semibold">Phone Number</label>
              <input
                type="tel"
                className="mt-1 p-2 text-xs w-full md:w-3/4 border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block font-semibold">Address</label>
              <input
                type="text"
                className="mt-1 p-2 text-xs w-full md:w-3/4 border rounded-md"
                placeholder="Enter your address"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Country</label>
                <input
                  type="text"
                  className="mt-1 p-2 text-xs w-full border rounded-md"
                  placeholder="Enter your country"
                />
              </div>
              <div>
                <label className="block font-semibold">State</label>
                <input
                  type="text"
                  className="mt-1 p-2 text-xs w-full border rounded-md"
                  placeholder="Enter your state"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">City</label>
                <input
                  type="text"
                  className="mt-1 p-2 text-xs w-full border rounded-md"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block font-semibold">Postal Code</label>
                <input
                  type="text"
                  className="mt-1 p-2 text-xs w-full border rounded-md"
                  placeholder="Enter your postal code"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 h-fit bg-[#FAF7F2] p-6 rounded-lg mt-6 md:mt-0">
          <h3 className="font-bold mb-4">Shipping Type</h3>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="shipping"
                className="form-radio text-[#27493E]"
                defaultChecked
              />
              <span className="ml-2 text-sm">Standard Shipping</span>
              <span className="ml-auto text-sm">${shippingCost.toFixed(2)}</span>
            </label>
          </div>
          {/* Additional shipping options */}
          <h3 className="font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm">NGN{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-sm">Total</span>
            <span className="text-sm">NGN{grandTotal.toFixed(2)}</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Link
              to="/payment"
              className="items-center px-[5vw] text-sm bg-[#27493E] text-white py-2 rounded-lg"
            >
              Checkout Payment (${grandTotal.toFixed(2)})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
