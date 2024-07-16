import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// import placeholderImage from "../assets/placeholder-image.png"; // Import a placeholder image for products without specific images

const MoreProducts = ({ products }) => {
  // Check if products is undefined or empty
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }
  const backToTop=()=>{
    window.scrollTo(0, 0)
  }
const productCards=products.slice(0,4)

  return (
    <div className="w-[80vw] mx-auto mt-2 md:mt-8 lg:mt-12">
      <p className="font-semibold text-lg md:text-xl lg:text-2xl">
        You can check out similar products
      </p>
      <div className="grid mx-auto md:my-4 lg:my-8 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {productCards.map((product) => (
          <div key={product.unique_id} className="md:h-[30vh] h-[20vh] lg:h-[40vh] text-center mb-[5rem] lg:mb-[7rem]">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
              className="cover-fill h-full w-full rounded-xl md:rounded-2xl lg:rounded-3xl"
              alt={product.name}
            />
            <p className="font-semibold mt-1 lg:pt-2 text-xs md:text-base lg:text-lg">{product.name}</p>
            <p className="font-semibold mt-1 lg:pt-2 text-xs md:text-base lg:text-lg">            {product.current_price &&
              product.current_price[0] &&
              product.current_price[0].NGN &&
              product.current_price[0].NGN[0]
                ? `NGN${product.current_price[0].NGN[0]}`
                : `NGN${product.price}`}</p>
            <Link to={`/product/${product.unique_id}`}>
              <button onClick={backToTop} className="mt-1 md:mt-2 lg:mt-2 text-[#27493E] font-semibold text-xs md:text-base lg:text-lg transition transform duration-300 hover:bg-[#27493E] hover:text-white">
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
