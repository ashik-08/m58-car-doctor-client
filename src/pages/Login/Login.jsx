import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1">
        <img src={login} alt="" />
      </div>
      <div className="flex-1 w-full border border-[#D0D0D0] p-8 md:p-20 rounded-xl">
        <h1 className="text-center text-sub-head text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
          Sign In
        </h1>
        <form>
          <span className="space-y-4">
            <p className="text-sub-head text-lg font-semibold">Email</p>
            <input
              className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </span>
          <span className="space-y-4">
            <p className="text-sub-head text-lg font-semibold mt-8">Password</p>
            <input
              className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </span>
          <button className="bg-special text-white text-xl font-semibold py-4 w-full rounded-lg my-8">
            <input type="submit" value="Sign In" />
          </button>
        </form>
        <div>
          <p className="text-center text-sub-head text-lg font-medium">
            Or Sign In with
          </p>
          <div className="flex justify-center items-center gap-4 mt-8 mb-12">
            <button className="bg-[#F5F5F8] p-3 rounded-full">
              <FaGoogle></FaGoogle>
            </button>
            <button className="bg-[#F5F5F8] p-3 rounded-full">
              <FaFacebook></FaFacebook>
            </button>
            <button className="bg-[#F5F5F8] p-3 rounded-full">
              <FaGithub></FaGithub>
            </button>
          </div>
          <p className="text-center text-para text-lg">
            Not registered yet?{" "}
            <Link to="/register" className="text-special font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
