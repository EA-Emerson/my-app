// src/components/Complete.js
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import check from "../assets/check-svgrepo-com.png";

const Complete = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" -black lg:w-[86vw] mx-[auto] md:px-3 px-2 lg:px-4 md:py-6 py-4 lg:py-8">
      <div className=" rounded-xl m-auto bg-[#FAF7F2] p-2 md:p-4 lg:p-6 flex flex-col items-center pt-4 md:pt-8 lg:pt-12 h-fit w-[90%] md:w-2/3 lg:w-1/2">
        <div className="h-16 w-16 lg:w-20 lg:h-20 bg-[#27493E] rounded-full p-4 flex items-center justify-center md:my-8 my-4 lg:my-12 mx-auto">
          <img src={check} alt="payment successful" />
        </div>
        <p className="md:text-xs text-[9px] md:px-4 px-2 lg:px-6 text-center mb-12">
          Your order has been successfully confirmed. Kindly download your order
          receipt from the registered email you entered
        </p>
        <Link to="/products">
          <button className="lg:px-[8vw] md:px-[12vw] px-[20vw] bg-[#27493E] text-white py-2 lg:py-3 rounded-lg lg:text-sm md:text-xs text-[9px]">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Complete;
