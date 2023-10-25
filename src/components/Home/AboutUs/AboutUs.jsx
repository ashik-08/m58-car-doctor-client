const AboutUs = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row space-y-24 md:space-y-40 lg:space-y-0 mt-24 md:mt-32">
        <div className="relative">
          <img
            className="w-3/4 rounded-xl shadow-xl"
            src="https://i.ibb.co/GFtT16k/person.jpg"
            alt=""
          />
          <img
            className="w-1/2 absolute -bottom-1/4 lg:bottom-1/4 xl:top-1/2 right-10 md:right-16 border-8 border-white rounded-lg"
            src="https://i.ibb.co/CvM9rqP/parts.jpg"
            alt=""
          />
        </div>
        <div className="px-3 md:px-5 lg:px-8">
          <p className="text-special text-xl font-bold">About Us</p>
          <h1 className="text-head text-3xl md:text-4xl lg:text-5xl font-bold mt-5 mb-8">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="text-para md:font-medium">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <p className="text-para md:font-medium mt-5 mb-8">
            The majority have suffered alteration in some form, by injected
            humour, or randomized words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <button></button>

          <button className="bg-special text-white text-xs md:text-base lg:text-lg font-semibold rounded-md px-3 py-2 md:px-5 md:py-3">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
