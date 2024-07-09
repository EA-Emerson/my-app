import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="flex flex-col-reverse text-white text-center h-screen">
      <div className="relative bg-cover h-screen bg-smallBed lg:bg-bed">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="lg:text-7xl md:text-5xl px-[2vw] text-2xl font-semibold text-center">
            Make Your Home A Haven
          </h1>
          <p className="w-4/5 lg:w-3/5 lg:text-base md:text-sm text-sm text-center py-8">
            Explore curation of home decor, get inspired by latest trends and
            create your unique style
          </p>
          <Link
            to="/products"
            className="my-4 py-4 px-6 md:py-6 md:px-8 lg:py-6 lg:px-[5vw] rounded-2xl bg-[#27493E] text-center text-base md:text-lg lg:text-xl font-semibold"
          >
            Explore All Interior Designs
          </Link>
        </div>
        <div className="absolute inset-0 mt-[5vh] space-x-1 flex items-center bottom-0 justify-center">
          <div className="h-[0.5vh] w-[7vw] md:h-[0.75vh] lg:h-[1vh] rounded-lg bg-white">

          </div>
          <div className="h-[0.5vh] w-[7vw] md:h-[0.75vh] lg:h-[1vh] rounded-lg bg-white bg-opacity-50">

          </div>
          <div className="h-[0.5vh] w-[7vw] md:h-[0.75vh] lg:h-[1vh] rounded-lg bg-white bg-opacity-50">
            
          </div>
        </div>
        <div className="py-4 md:py-[2vh] absolute bottom-0 bg-[#27493E] w-full text-center text-base md:text-xl lg:text-2xl">
          <p>NO DISCOUNT DEALS AVAILABLE AT THE MOMENT, CHECK AGAIN LATER.</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
