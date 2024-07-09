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
    <div className="w-[80vw] mx-auto mt-12">
      <p className="font-semibold text-2xl">
        You can check out similar products
      </p>
      <div className="grid mx-auto my-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {productCards.map((productCard) => (
          <div key={productCard.id} className="h-[40vh] text-center mb-[7rem]">
            <img
              src={productCard.image}
              className="cover-fill h-full w-full rounded-3xl"
              alt={productCard.title}
            />
            <p className="font-semibold pt-2">{productCard.title}</p>
            <p className="font-semibold pt-2">$100</p>
            <Link to="/details">
              <button className="pt-2 text-[#27493E] font-semibold">
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
