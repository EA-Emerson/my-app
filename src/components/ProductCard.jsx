import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-700">${price}</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
