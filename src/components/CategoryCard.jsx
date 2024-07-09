import React from "react";
const CategoryCard = ({ image, title }) => {
  return (
    <div className="bg-white shadow-md inline-block rounded-3xl w-full bg-cover overflow-hidden  relative">
      <img src={image} alt={title} className="h-[50vh] w-[50vh]" />
      <div className="p-4 text-lg font-semibold absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
