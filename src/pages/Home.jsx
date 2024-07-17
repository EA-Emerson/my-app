import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Explore from "./Explore";
import flower from "../assets/black flower vase.png";
import fatLight from "../assets/fat lights.png";
import cart from "../assets/shopping-cart-svgrepo-com.png";
import vase from "../assets/vase.png";
import weirdStatue from "../assets/weird statues.png";
import curtain from "../assets/curtain cate.png";

const Home = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const productCards = products.slice(0, 9);
  return (
    <div>
      <Explore />
      <main className="">
        {/* Categories Section */}
        <section className="mb-4 md:mb-6 lg:mb-8 py-4 md:py-8 lg:py-12 w-[80%] lg:w-full flex flex-col mx-auto">
          <h2 className="md:text-2xl text-xl lg:text-3xl text-center font-bold mb-4 md:mb-6 lg:mb-8">
            Categories
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 md:h-1/2 m-auto gap-4 lg:w-[80%] w-full md:gap-6 lg:gap-16 h-[70vh]">
            <div className="cursor-pointer relative h-full flex items-center justify-center col-span-1 row-span-2 lg:rounded-3xl">
              <img
                src={flower}
                alt="Flower Vase"
                className="lg:rounded-3xl md:rounded-2xl rounded-xl h-full w-full object-cover"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl lg:rounded-b-3xl">
                Flower Vase
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={fatLight}
                alt="Lighting"
                className="h-full w-full object-cover md:rounded-2xl rounded-xl lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl lg:rounded-b-3xl">
                Lighting
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={curtain}
                alt="Curtains"
                className="h-full w-full object-cover md:rounded-2xl rounded-xl lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl lg:rounded-b-3xl">
                Curtains
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={vase}
                alt="Furniture"
                className="h-full w-full object-cover md:rounded-2xl rounded-xl lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center md:rounded-b-2xl rounded-b-xl lg:rounded-b-3xl">
                Furniture
              </div>
            </div>
            <div className="cursor-pointer flex relative h-full lg:h-[45vh] items-center justify-center">
              <img
                src={weirdStatue}
                alt="Ceramic"
                className="h-full w-full object-cover md:rounded-2xl rounded-xl lg:rounded-3xl"
              />
              <div className="lg:p-6 md:p-4 p-2 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl">
                Ceramic
              </div>
            </div>
          </div>
        </section>

        {/* Top Products Section */}
        <section className="bg-[#FAF7F2] py-4 md:py-8 lg:py-12 w-full flex flex-col mx-auto">
          <h2 className="md:text-2xl text-xl lg:text-3xl text-center font-bold md:mb-6 mb-4 lg:mb-8">
            Top Products
          </h2>
          <div className="grid w-4/5 mx-auto h-fit lg:h-full grid-cols-3 md:grid-cols-3 gap-y-6 md:gap-y-8 lg:gap-y-12 gap-x-2 md:gap-x-6 lg:gap-x-8">
            {productCards.map((product) => (
              // <div className="h-[20vh] lg:h-full" key={product.id}>
              <div
                className="relative text-center mb:2 md:mb-4 lg:mb-7"
                key={product.id}
              >
                <Link to="/details">
                  <img
                    src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                    className="object-cover h-28 md:h-80 lg:h-96 w-full rounded-xl cursor-pointer"
                    alt={product.name}
                  />
                </Link>

                <Link
                  to="/cart"
                  className="absolute top-1 right-1 lg:top-2 lg:right-2 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 md:px-2 px-1 lg:px-3 py-1 lg:py-2 rounded-md text-sm font-medium flex items-center transition transform duration-300 hover:scale-110 hover:bg-gray-200 hover:shadow-lg bg-white bg-opacity-80"
                >
                  <img className="w-5" src={cart} alt="cart" />
                </Link>
                <Link to="/details">
                  <p className="font-semibold pt-2 md:pt-1 lg:pt-2 text-[9px] md:text-xs lg:text-sm truncate w-full">
                    {product.name}
                  </p>
                </Link>
                <p className="font-semibold pt-1 md:pt-1 lg:pt-2 text-[10px] md:text-xs lg:text-sm">
                  {product.current_price &&
                  product.current_price[0] &&
                  product.current_price[0].NGN &&
                  product.current_price[0].NGN[0]
                    ? `NGN${product.current_price[0].NGN[0]}`
                    : `NGN${product.price}`}
                </p>
                <Link to={`/product/${product.unique_id}`}>
                  <button className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-[9px] md:text-sm lg:text-base transition transform duration-300 hover:bg-[#27493E] hover:text-white">
                    Shop Now
                  </button>
                </Link>
              </div>
              // </div>
            ))}
          </div>
          <div className="m-auto">
            <Link to="/products">
              <button className="my-4 py-5 px-24 rounded-2xl bg-[#27493E] font-semibold text-white m-auto">
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
