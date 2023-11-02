import login from "../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
// import axios from "axios";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUser, signInWithGoogle, signInWithFacebook, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // signIn user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // if (result?.user?.emailVerified) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(location?.state ? location?.state : "/");
        // const loggedInUser = { email: result?.user?.email };
        // // get access token with axios
        // axios
        //   .post("https://m58-car-doctor-server.vercel.app/jwt", loggedInUser, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });
        // } else {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Please verify your email address",
        //     confirmButtonText: "Ok",
        //   });
        // }
      })
      .catch((error) => {
        console.error(error);
        // check for invalid credential
        if (
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          toast.error("Invalid Email or Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Account exists with different credential",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  // facebook sign in
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Account exists with different credential",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  // github sign in
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully Logged In. Welcome ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Account exists with different credential",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  const handleForgetPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);

    // send pass reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "info",
          title: "Success!",
          text: "Please check your email",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1">
        <img src={login} alt="" />
      </div>
      <div className="flex-1 w-full border border-[#D0D0D0] p-8 md:p-20 rounded-xl">
        <h1 className="text-center text-sub-head text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
          Sign In
        </h1>
        <form onSubmit={handleLogin}>
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
            <button
              onClick={handleGoogleSignIn}
              className="bg-[#F5F5F8] p-3 rounded-full"
            >
              <FaGoogle></FaGoogle>
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="bg-[#F5F5F8] p-3 rounded-full"
            >
              <FaFacebook></FaFacebook>
            </button>
            <button
              onClick={handleGithubSignIn}
              className="bg-[#F5F5F8] p-3 rounded-full"
            >
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
          <form onSubmit={handleForgetPass} className="mt-8 w-72 md:w-96">
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
      <ToastContainer />
    </section>
  );
};

export default Login;
