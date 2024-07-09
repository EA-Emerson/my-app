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
    <div className="py-8 flex flex-col w-4/5 mx-auto">
      <div className="mb-4">
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
      <div className="flex">
        <div className="flex w-1/2 h-[55vh]">
          <div className="w-[70%] h-full">
            <img
              className="cover-fill h-full w-full rounded-3xl"
              src={roundNestingTable}
              alt="Round Nesting Table"
            />
          </div>
          <div className="flex flex-col h-[55vh] w-[20%]">
            <img
              className="cover-fill h-full w-full rounded-lg mb-4 ml-4"
              src={table1}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg mb-4 ml-4"
              src={table2}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg mb-4 ml-4"
              src={table3}
              alt=""
            />
            <img
              className="cover-fill h-full w-full rounded-lg ml-4"
              src={table4}
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 h-[55vh]">
          <h2 className="font-semibold text-3xl leading-loose">
            Round List Nesting Table
          </h2>
          <p>
            These tables are designed to be nested when not in use, saving space
            and allowing for easy storage.The lift up mechanism allows you to
            raise the table's surface to a comfortable height.
          </p>
          <h2 className="font-semibold text-3xl">$100</h2>
          <div className="flex my-5">
            <button
              className={`rounded-full h-7 w-7 mx-2 bg-[#BCA287] ${
                selectedColor === 1
                  ? "border-2  border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(1)}
            ></button>
            <button
              className={`rounded-full h-7 w-7 mx-2 bg-black ${
                selectedColor === 2
                  ? "border-2 border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(2)}
            ></button>
            <button
              className={`rounded-full h-7 w-7 mx-2 bg-[#A2A1A1] ${
                selectedColor === 3
                  ? "border-2 border-[#27493E]"
                  : "border-none"
              }`}
              onClick={() => handleColorChoice(3)}
            ></button>
          </div>
          <div>
            <p className="font-semibold">Quantity</p>
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
                {" "}
                <button className="px-12 rounded-lg text-xs py-3 outline-[1px] border-[1px] border-[#27493E]">
                  Add to Cart
                </button>
              </Link>
              <Link to="/products">
                <button className="text-white bg-[#27493E] px-12 rounded-lg text-xs py-3 border-[1px] border-[#27493E]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>


<TabComponent/>
        
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
