import { Link } from "react-router-dom";
import errorImage from "../../assets/error/404 Error.gif";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center md:mt-5 2xl:mt-16 p-5">
        <figure className="outline-dashed outline-1 outline-blue-gray-50 drop-shadow-sm">
          <img src={errorImage} alt="errorPage-image" />
        </figure>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-sub-head mt-12">
            Page Not Found
          </p>
          <p className="md:text-lg lg:text-xl text-para mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            to="/"
            className="bg-special text-white text-lg font-medium px-6 py-2.5 rounded-lg mt-8"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
