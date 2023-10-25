import forward from "../../../assets/icons/forward_red.svg";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="bg-white p-3 md:p-4 lg:p-6 border border-foot-details rounded-lg">
      <img
        className="md:max-h-44 w-full lg:max-h-[155px] xl:max-h-56 rounded-lg"
        src={img}
        alt=""
      />
      <h3 className="text-sub-head text-xl md:text-2xl font-bold my-5">
        {title}
      </h3>
      <span className="flex justify-between items-center">
        <p className="text-special text-lg md:text-xl font-semibold">
          Price: ${price}
        </p>
        <button>
          <img
            className="hover:bg-foot-details p-1.5 md:p-3 rounded-full"
            src={forward}
            alt=""
          />
        </button>
      </span>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
