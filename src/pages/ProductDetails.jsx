import { Link } from "react-router-dom";
import roundNestingTable from "../assets/center table.png";
import table1 from "../assets/brown and white table.png";
import table2 from "../assets/center table.png";
import table3 from "../assets/big black and white table.png";
import table4 from "../assets/black and white table.png";
import MoreProducts from "../components/MoreProducts";
import { useState } from "react";
import TabComponent from "./TabComponent";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorChoice = (buttonNumber) => {
    setSelectedColor(buttonNumber);
  };

  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="py-8 flex flex-col w-full lg:w-[80%] mx-auto">
      <div className="mb-4 lg:ml-0 px-[8vw] lg:px-0">
        <span>
          <Link to="/" className="text-sm">
            Home
          </Link>
          <span> / </span>
          <Link to="/products" className="text-sm">
            Products
          </Link>
          <span className="text-[#27493E] text-sm font-bold">
            {" "}
            / Round List Nesting Table
          </span>
        </span>
      </div>
      <div className="flex flex-col px-6 lg:px-0 lg:flex-row gap-8">
        <div className="flex w-[90%] lg:w-1/2 h-[30vh] md:h-[45vh] mx-auto">
          <div className="w-[70%] h-[30vh] md:h-[45vh] lg:h-[55vh]">
            <img
              className="cover-fill h-[100%] lg:h-full w-full rounded-3xl"
              src={roundNestingTable}
              alt="Round Nesting Table"
            />
          </div>
          <div className="flex flex-col h-[30vh] md:h-[45vh] lg:h-[55vh] w-[20%] space-y-4 ml-4">
            <img
              className="cover-fill h-full w-full rounded-lg"
              src={table1}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg"
              src={table2}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg"
              src={table3}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg"
              src={table4}
              alt=""
            />
          </div>
        </div>
        <div className="w-full px-[4vw] lg:w-1/2">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl  leading-loose">
            Round List Nesting Table
          </h2>
          <p className="text-sm lg:text-base">
            These tables are designed to be nested when not in use, saving space
            and allowing for easy storage.The lift up mechanism allows you to
            raise the table's surface to a comfortable height.
          </p>
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl  leading-loose">
            $100
          </h2>
          <div className="flex my-3 md:my-4 lg:my-5">
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6  md:w-6 h-5 w-5 lg:mx-2 bg-[#BCA287] ${
                selectedColor === 1
                  ? "border-2 border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(1)}
            ></button>
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6  md:w-6 h-5 w-5  ml-2 bg-black ${
                selectedColor === 2
                  ? "border-2 border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(2)}
            ></button>
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6  md:w-6 h-5 w-5 ml-2 bg-[#A2A1A1] ${
                selectedColor === 3
                  ? "border-2 border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(3)}
            ></button>
          </div>
          <div>
            <p className="font-semibold text-sm lg:text-base">Quantity</p>
            <div className="flex items-center align-middle justify-center space-x-6 border-[#27493E] w-fit rounded-md px-3 border-[1px] my-2">
              <button
                onClick={decrement}
                className="m-auto"
                disabled={quantity === 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
            <div className="my-6 space-x-6">
              <Link to="/cart">
                <button className="px-8 lg:px-12 rounded-lg text-xs py-3 outline-[1px] border-[1px] border-[#27493E]">
                  Add to Cart
                </button>
              </Link>
              <Link to="/products">
                <button className="text-white bg-[#27493E] px-8 lg:px-12 rounded-lg text-xs py-3 border-[1px] border-[#27493E]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-6 mt-4 lg:mt-8">
        <TabComponent />
      </div>
      <div className="md:mt-6 mt-4 lg:mt-8">
        <MoreProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
