import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <div className="relative">
      <h1 className="absolute flex justify-center bottom-0 left-1/2 right-1/2 -z-10 text-6xl md:text-8xl opacity-5">
        {children}
      </h1>
      <h5 className="text-special text-xl font-bold">{children}</h5>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
