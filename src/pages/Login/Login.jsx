import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

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
          <span className="space-y-4 relative">
            <p className="text-sub-head text-lg font-semibold mt-8">Password</p>
            <input
              className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              required
            />
            <span
              className="absolute bottom-0 right-3"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </span>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="text-sub-head font-semibold hover:text-head mt-5"
          >
            Forgot password?
          </button>
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
      {/* password reset modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex justify-center text-center">
          <form
            // onSubmit={handleForgetPass}
            className="mt-8 w-72 md:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <p className="text-sub-head text-lg font-semibold">
                Enter Your Email
              </p>
              <input
                className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <button className="bg-special text-white font-medium py-3 w-full rounded-lg my-6">
              <input type="submit" value="Send Password Reset Link" />
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default Login;
