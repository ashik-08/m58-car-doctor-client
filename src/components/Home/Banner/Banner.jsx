import backward from "../../../assets/icons/backward.svg";
import forward from "../../../assets/icons/forward.svg";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full">
        {/* slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/w77HzHd/banner-1.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 1 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 1 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide6">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide2">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 1 end */}

        {/* slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GcXc4yR/banner-2.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 2 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 2 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide1">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide3">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 2 end */}

        {/* slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/gTS52fk/banner-3.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 3 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 3 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide2">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide4">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 3 end */}

        {/* slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1svQ18T/banner-4.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 4 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 4 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide3">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide5">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 4 end */}

        {/* slider 5 */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/XFRhr1j/banner-5.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 5 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 5 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide4">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide6">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 5 end */}

        {/* slider 6 */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/ftdxCJh/banner-6.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute inset-0 slider-img-gradient"></div>
          {/* slide 6 overlay text */}
          <div className="text-white absolute transform -translate-y-1/2 left-2 top-1/2 md:left-20 lg:left-24">
            <h2 className="text-sm md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-xs md:text-sm lg:text-lg md:font-medium my-2 md:mt-3 md:mb-5 lg:mt-6 lg:mb-7">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form.
            </p>
            <span className="text-xs md:text-base lg:text-lg font-medium md:font-semibold space-x-2 md:space-x-5">
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Discover More
              </button>
              <button className="border border-white hover:border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special">
                Latest Project
              </button>
            </span>
          </div>
          {/* slide 6 overlay text end */}
          <div className="absolute flex gap-3 md:gap-5 transform -translate-y-5 md:-translate-y-12 right-2 bottom-0 md:right-10 lg:right-12">
            <a href="#slide5">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={backward}
                alt="backward-icon"
              />
            </a>
            <a href="#slide1">
              <img
                className="bg-slider-arrow hover:bg-special p-1 md:p-3 lg:p-4 rounded-full"
                src={forward}
                alt="forward-icon"
              />
            </a>
          </div>
        </div>
        {/* slider 6 end */}
      </div>
    </section>
  );
};

export default Banner;
