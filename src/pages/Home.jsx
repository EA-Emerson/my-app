import React from "react";
import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import CategoryCard from "../components/CategoryCard";
import Explore from "./Explore";
import flower from "../assets/black flower vase.png";
import fatLight from "../assets/fat lights.png";
import centerTable from "../assets/center table.png";
import vase from "../assets/vase.png";
import weirdStatue from "../assets/weird statues.png";

import blackChair from "../assets/black chair.png";
import curtain from "../assets/curtain cate.png";
import hangingLight from "../assets/vertical lights.png";
import roundCenterTable from "../assets/center table.png";
import elephantTusk from "../assets/weird statues.png";
import luxuryTable from "../assets/side table.png";
// import vase from "../assets/vase.png";
import hangingLights from "../assets/weird light.png";
import sofa from "../assets/grey arm chair.png";
const Home = () => {
  // const categoryCards = [
  //   {
  //     image: flower,
  //     title: "Flower Vase",
  //   },
  //   {
  //     image: fatLight,
  //     title: "Lighting",
  //   },
  //   {
  //     image: weirdStatue,
  //     title: "Curtains",
  //   },
  //   {
  //     image: centerTable,
  //     title: "Furniture",
  //   },
  //   {
  //     image: vase,
  //     title: "Ceramic",
  //   },
  // ];
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
      image: hangingLight,
      title: "Hanging Light",
      price: "100",
    },
    {
      image: roundCenterTable,
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
      title: "Luxury Marble End Table",
      price: "100",
    },
    {
      image: vase,
      title: "Ceramic Structure",
      price: "100",
    },

    {
      image: hangingLights,
      title: "Hanging Lights",
      price: "100",
    },

    {
      image: sofa,
      title: "Decorative sofa chair",
      price: "100",
    },
  ];
  return (
    <div>
      <Explore />
      <main className="">
        <section className="mb-4 md:mb-6 lg:mb-8 py-4 md:py-8 lg:py-12 w-[80%] flex flex-col mx-auto ">
          <h2 className="md:text-2xl text-xl lg:text-3xl text-center font-bold mb-4 md:mb-6 lg:mb-8">Categories</h2>
          <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 lg:h-full gap-4 w-full md:gap-6 lg:gap-8 h-[70vh]">
            <div className="cursor-pointer relative h-full lg:h-full flex items-center justify-center col-span-1 row-span-2 lg:rounded-3xl">
              <img
                src={flower}
                alt="Flower Vase"
                className="lg:rounded-3xl md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl  lg:rounded-b-3xl">
                Flower Vase
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={fatLight}
                alt="Lighting"
                className="h-full w-full object-fill md:rounded-2xl rounded-xl  lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold  absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl  lg:rounded-b-3xl">
                Lighting
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={centerTable}
                alt="Curtains"
                className="h-full w-full object-fill md:rounded-2xl rounded-xl  lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl  lg:rounded-b-3xl">
                Curtains
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={vase}
                alt="Furniture"
                className="h-full w-full object-fill md:rounded-2xl rounded-xl  lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl  lg:rounded-b-3xl">
                Furniture
              </div>
            </div>
            <div className="cursor-pointer  flex relative h-full lg:h-[45vh]  items-center justify-center">
              <img
                src={weirdStatue}
                alt="Ceramic"
                className="h-full w-full object-fill md:rounded-2xl rounded-xl lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl">
                Ceramic
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FAF7F2] mb-4 md:mb-6 lg:mb-8 py-4 md:py-8 lg:py-12 w-full lg:w-[80%] flex flex-col mx-auto">
          <h2 className="md:text-2xl text-xl lg:text-3xl text-center font-bold md:mb-6 mb-4 lg-:mb-8">Top Products</h2>
          <div className="grid w-4/5 mx-auto h-fit lg:h-full  grid-cols-3 md:grid-cols-3 md:gap-6 gap-2 lg:gap-8">
            {productCards.map((productCard) => (
              <div className="h-[20vh] lg:h-full mb-8">
                <div
                  key={productCard.id}
                  className=" text-center lg:mb-[4rem] h-[30vh] lg:[h-full]"
                >
                  <Link to="/details">
                    <img
                      src={productCard.image}
                      className="cover-fill h-2/5 lg:h-full w-full rounded-lg md:rounded-2xl lg:rounded-3xl cursor-pointer"
                      alt={productCard.title}
                    />
                  </Link>
                  <Link to="/details">
                    <p className="font-semibold  pt:[3vh] md:pt-1 lg:pt-2 text-[9px] md:text-xs lg:text-sm">
                      {productCard.title}
                    </p>
                  </Link>
                  <p className="font-semibold  pt:[3vh] md:pt-1 lg:pt-2 text-[10px] md:text-xs lg:text-sm">
                    $100
                  </p>
                  <Link to="/details">
                    <button className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-[9px] md:text-sm lg:text-base transition transform duration-300 hover:bg-[#27493E] hover:text-white">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="m-auto">
            <Link to="/products">
              <button className="my-4 py-5 px-24 rounded-2xl bg-[#27493E]  font-semibold text-white m-auto">
                View All
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
