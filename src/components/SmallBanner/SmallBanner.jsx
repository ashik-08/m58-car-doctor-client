import PropTypes from "prop-types";

const SmallBanner = ({ children, path }) => {
  return (
    <div className="relative">
      <img
        className="w-screen"
        src="https://i.ibb.co/R7RVqgy/checkout.png"
        alt="banner-image"
      />
      <div className="absolute inset-0 slider-img-gradient"></div>
      <h2 className="absolute top-1/2 bottom-1/2 left-[10%] flex items-center text-white text-xl md:text-4xl xl:text-5xl font-bold">
        {children}
      </h2>
      <div className="absolute flex justify-center bottom-0 left-1/2 right-1/2 ">
        <p className=" text-white text-xs md:text-base lg:text-lg font-medium bg-special clip-bg px-6 md:px-8 lg:px-10 py-1 md:py-2 lg:py-3">
          {path}
        </p>
      </div>
    </div>
  );
};

SmallBanner.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
};

export default SmallBanner;
