import { Link } from "react-router-dom";
import doubleCoffeeTable1 from "../assets/black and white table.png";
import marbleEndTable from "../assets/side table.png";
import doubleCoffeeTable2 from "../assets/big round table.png";
import ovalTable from "../assets/weird white and brown table.png";
const MoreProducts = () => {
  const productCards = [
    {
      image: doubleCoffeeTable1,
      title: "Double Coffee Table",
      price: "100",
    },
    {
      image: marbleEndTable,
      title: "Marble End Table",
      price: "100",
    },
    {
      image: doubleCoffeeTable2,
      title: "Double Coffee Table",
      price: "100",
    },
    {
      image: ovalTable,
      title: "Oval Table",
      price: "100",
    },
  ];
  return (
    <div className="w-[80vw] mx-auto mt-2 md:mt-8 lg:mt-12">
      <p className="font-semibold text-lg md:text-xl lg:text-2xl">
        You can check out similar products
      </p>
      <div className="grid mx-auto md:my-4 lg:my-8 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {productCards.map((productCard) => (
          <div key={productCard.id} className="md:h-[30vh] h-[20vh] lg:h-[40vh] text-center mb-[5rem] lg:mb-[7rem]">
            <img
              src={productCard.image}
              className="cover-fill h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"
              alt={productCard.title}
            />
            <p className="font-semibold mt-1 lg:pt-2 text-xs md:text-base lg:text-lg">{productCard.title}</p>
            <p className="font-semibold mt-1 lg:pt-2 text-xs md:text-base lg:text-lg">$100</p>
            <Link to="/details">
            <button className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-xs md:text-base lg:text-lg transition transform duration-300 hover:bg-[#27493E] hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
