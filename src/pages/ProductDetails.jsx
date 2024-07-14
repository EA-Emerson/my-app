import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import TabComponent from "./TabComponent";
import MoreProducts from "../components/MoreProducts";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();

  // Find the product using unique_id instead of id
  const product = products.find((p) => p.unique_id === id);

  // Ensure useState calls are at the top level
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleColorChoice = (buttonNumber) => {
    setSelectedColor(buttonNumber);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Render "Product not found" if product is undefined
  if (!product) return <div>Product not found</div>;

  return (
    <div className="py-8 flex flex-col w-full lg:w-[80%] mx-auto">
      <div className="mb-4 lg:ml-0 px-[8vw] lg:px-0">
        <span>
          <Link to="/" className="text-sm">
            Home
          </Link>
          <span> / </span>
          <Link to="/products" className="text-sm">
            Products / 
          </Link>
          <span className="text-[#27493E] text-sm font-bold">
            {product.name}
          </span>
        </span>
      </div>
      <div className="flex flex-col px-6 lg:px-0 lg:flex-row gap-8">
        <div className="flex w-[90%] lg:w-1/2 h-[30vh] md:h-[45vh] mx-auto">
          <div className="w-[70%] h-[30vh] md:h-[45vh] lg:h-[55vh]">
            <img
              className="cover-fill h-full w-full rounded-3xl"
              src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col h-[30vh] md:h-[45vh] lg:h-[55vh] w-[20%] space-y-4 ml-4">
            {/* Placeholder images */}
            {product.photos.slice(1, 5).map((photo, index) => (
              <img
                key={index}
                className="cover-fill h-full w-full rounded-lg"
                src={`https://api.timbu.cloud/images/${photo?.url}`}
                alt={`Product ${index + 2}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full px-[4vw] lg:w-1/2">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl leading-loose">
            {product.name}
          </h2>
          <p className="text-sm lg:text-base">{product.description}</p>
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl leading-loose">
            {product.price}
          </h2>
          <div className="flex my-3 md:my-4 lg:my-5">
            {/* Color selection buttons */}
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 lg:mx-2 bg-[#BCA287] ${
                selectedColor === 1 ? "border-2 border-[#27493E]" : "border-none"
              }`}
              onClick={() => handleColorChoice(1)}
            ></button>
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 ml-2 bg-black ${
                selectedColor === 2 ? "border-2 border-[#27493E]" : "border-none"
              }`}
              onClick={() => handleColorChoice(2)}
            ></button>
            <button
              className={`rounded-full lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5 ml-2 bg-[#A2A1A1] ${
                selectedColor === 3 ? "border-2 border-[#27493E]" : "border-none"
              }`}
              onClick={() => handleColorChoice(3)}
            ></button>
          </div>
          <div>
            <p className="font-semibold text-sm lg:text-base">Quantity</p>
            <div className="flex items-center align-middle justify-center space-x-6 border-[#27493E] w-fit rounded-md px-3 border-[1px] my-2">
              {/* Quantity controls */}
              <button onClick={decrement} className="m-auto" disabled={quantity === 1}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={increment}>+</button>
            </div>
            <div className="my-6 space-x-6">
              {/* Add to cart and shop now buttons */}
              <button
                onClick={handleAddToCart}
                className="px-8 lg:px-12 rounded-lg text-xs py-3 outline-[1px] border-[1px] border-[#27493E]"
              >
                Add to Cart
              </button>
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
        {/* Tabs component */}
        <TabComponent products={products}/>
      </div>
      <div className="md:mt-6 mt-4 lg:mt-8">
        {/* More products component */}
        <MoreProducts products={products} />
      </div>
    </div>
  );
};

export default ProductDetails;
