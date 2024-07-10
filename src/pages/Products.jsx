import React, { useState } from "react";
import filter from "../assets/filter-funnel-processing-svgrepo-com.png";
import blackChair from "../assets/black chair.png";
import curtain from "../assets/curtain cate.png";
import hangingLight from "../assets/vertical lights.png";
// import roundCenterTable from "../assets/center table.png";
import elephantTusk from "../assets/weird statues.png";
import luxuryTable from "../assets/side table.png";
import vase from "../assets/vase.png";
import hangingLights from "../assets/weird light.png";
import sofa from "../assets/grey arm chair.png";
import doubleCoffeeBlack from "../assets/big black and white table.png";
import fatLight from "../assets/fat lights.png";
import doubleCoffee from "../assets/big round table.png";
import bigSofa from "../assets/grey sofa.png";
import roundNestingTable from "../assets/center table.png";
import ovalCoffeeTable from "../assets/weird white and brown table.png";
import flower from "../assets/flower vase.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeButton, setActiveButton] = useState(2);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, ">"];
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const productCards = [
    {
      image: blackChair,
      title: "Flower Vase",
      price: "100",
    },
    {
      image: curtain,
      title: "Exotic Curtains",
      price: "100",
    },
    {
      image: hangingLights,
      title: "Hanging Light",
      price: "100",
    },

    {
      image: roundNestingTable,
      title: "Round Lift Nesting Table",
      price: "100",
    },
    {
      image: elephantTusk,
      title: "Elephant Tusk Ceramics",
      price: "100",
    },
    {
      image: luxuryTable,
      title: "Marble End Table",
      price: "100",
    },
    {
      image: vase,
      title: "Abstract Ceramic Structure",
      price: "100",
    },
    {
      image: hangingLight,
      title: "Hanging Lights",
      price: "100",
    },
    {
      image: doubleCoffeeBlack,
      title: "Double Coffee Table",
      price: "100",
    },
    {
      image: luxuryTable,
      title: "Marble End Table",
      price: "100",
    },
    {
      image: doubleCoffee,
      title: "Double Coffee Table",
      price: "100",
    },
    {
      image: ovalCoffeeTable,
      title: "Oval Coffee Table",
      price: "100",
    },
    {
      image: sofa,
      title: "Decorative sofa chair",
      price: "100",
    },
    {
      image: fatLight,
      title: "Macaroon Light",
      price: "100",
    },

    {
      image: bigSofa,
      title: "Living Room Sofa",
      price: "100",
    },

    {
      image: flower,
      title: "Decorative Plant",
      price: "100",
    },
  ];
  return (
    <div className="mt-[10vh] py-8 flex flex-col w-4/5 mx-auto">
      <div className="flex justify-between">
        <span>
          <Link to="/" className="text-sm">
            Home
          </Link>
          <span className="text-[#27493E] font-bold text-sm"> / Products</span>
        </span>
        <button className="flex gap-2">
          Filter <img className="mt-1 w-5 h-5" src={filter} alt="filter" />
        </button>
      </div>
      <div className="grid mx-auto my-8 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {productCards.map((productCard) => (
          <div
            key={productCard.id}
            className="lg:h-[20vw] md:h-[30vw] h-[20vh] text-center mb-[5rem] lg:mb-[7rem]"
          >
            <img
              src={productCard.image}
              className="cover-fill h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl cursor-pointer"
              alt={productCard.title}
            />
            <p className="font-semibold pt-1 md:pt-2 lg:pt-2 text-[9px] md:text-sm lg:text-base">
              {productCard.title}
            </p>
            <p className="font-semibold pt-1 md:pt-2  lg:pt-2 text-[9px] md:text-sm lg:text-base">
              $100
            </p>
            <Link to="/details">
              <button className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-[9px] md:text-sm lg:text-base transition transform duration-300 hover:bg-[#27493E] hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center py-4">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`${
              activeButton === page + 1
                ? "bg-[#27493E] text-white"
                : "text-[#27493E] border-[#27493E] border-2"
            } flex items-center justify-center w-5 h-5 text-xs md:text-base md:w-10 md:h-10 mx-1 md:mx-2 font-semibold rounded-full`}
            onClick={() => handleButtonClick(page + 1)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
