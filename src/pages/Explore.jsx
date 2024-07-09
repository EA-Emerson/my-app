import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <div className="flex-col-reverse text-white text center h-screen">
      <div className="bg-contain h-screen mt-[-10vh] bg-bed ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-7xl font-semibold">Make Your Home A Haven</h1>
          <p className="w-3/5 text-center py-8">
            Explore curation of home decor, get inspired by latest trends and
            create your unique style
          </p>
          <Link
            to="/products"
            className="my-4 py-6 px-20 rounded-2xl bg-[#27493E] text-2xl font-semibold"
          >
            Explore All Interior Designs
          </Link>
        </div>
        <div className="py-6 absolute bottom-0 bg-[#27493E] w-full  text-center text-2xl">
          <p>NO DISCOUT DEALS AVAILABLE AT THE MOMENT, CHECK AGAIN LATER.</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
