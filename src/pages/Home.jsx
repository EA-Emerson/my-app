import React from "react";
import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import CategoryCard from "../components/CategoryCard";
import Explore from "./Explore";
import flower from "../assets/flower vase.png";
import fatLight from "../assets/fat lights.png";
import centerTable from "../assets/center table.png";
import vase from "../assets/vase.png";
import weirdStatue from "../assets/weird statues.png";

import blackChair from "../assets/black chair.png";
import curtain from "../assets/black chair.png";
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
      image: roundCenterTable,
      title: "Round Lift Nesting Table",
      price: "100",
    },
    {
      image: vase,
      title: "Abstract Ceramic Structure",
      price: "100",
    },
    {
      image: curtain,
      title: "Exotic Curtains",
      price: "100",
    },
    {
      image: elephantTusk,
      title: "Elephant Tusk Ceramics",
      price: "100",
    },
    {
      image: hangingLights,
      title: "Hanging Light",
      price: "100",
    },
    {
      image: hangingLight,
      title: "Hanging Lights",
      price: "100",
    },
    {
      image: luxuryTable,
      title: "Luxury Marble End Table",
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
        <section className=" mb-8 py-12 w-[80%] flex flex-col mx-auto ">
          <h2 className="text-3xl text-center font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 h-full w-full gap-8">
            <div className="cursor-pointer relative h-full flex items-center justify-center col-span-1 row-span-2 rounded-3xl">
              <img
                src={flower}
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <div className="p-6 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-3xl">
                Flower Vase
              </div>
            </div>
            <div className="cursor-pointer flex relative h-[50vh] items-center justify-center">
              <img
                src={fatLight}
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
              <div className="p-6 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-3xl">
                Lighting
              </div>
            </div>
            <div className="cursor-pointer flex relative h-[50vh] items-center justify-center">
              <img
                src={centerTable}
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
              <div className="p-6 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-3xl">
                Curtains
              </div>
            </div>
            <div className="cursor-pointer  flex relative h-[50vh] items-center justify-center">
              <img
                src={vase}
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
              <div className="p-6 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-3xl">
                Furniture
              </div>
            </div>
            <div className="cursor-pointer  flex relative h-[50vh] items-center justify-center">
              <img
                src={weirdStatue}
                alt=""
                className="h-full w-full object-fill rounded-3xl"
              />
              <div className="p-6 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-3xl">
                Ceramic
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FAF7F2] pt-12 flex flex-col">
          <h2 className="text-3xl text-center font-bold mb-8">Top Products</h2>
          <div className="grid w-4/5 mx-auto grid-cols-3 md:grid-cols-3 gap-8">
            {productCards.map((productCard) => (
              <div
                key={productCard.id}
                className="h-[50vh] text-center mb-[7rem]"
              >
                <Link to="/details">
                  <img
                    src={productCard.image}
                    className="cover-fill h-full w-full rounded-3xl cursor-pointer"
                    alt={productCard.title}
                  />
                </Link>
                <Link to="/details">
                  <p className="font-semibold pt-2">{productCard.title}</p>
                </Link>
                <p className="font-semibold pt-2">$100</p>
                <Link to="/details">
                  <button className="pt-2 text-[#27493E] font-semibold">
                    Shop Now
                  </button>
                </Link>
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
