import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const terms = form.terms.checked;
    // console.log(name, email, password, terms);

    const passRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?]{6,}$/;

    // check password
    if (!passRegex.test(password)) {
      toast.warn(
        "Password must contain one uppercase letter, one special character, and should not be less than 6 characters.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: result?.user?.photoURL,
        })
          .then(() => {
            // Profile updated!
          })
          .catch(() => {
            // An error occurred
          });
        // send verification email
        sendEmailVerification(result.user).then(() => {
          Swal.fire({
            icon: "info",
            title: "Success!",
            text: "Check your inbox for verification email",
            confirmButtonText: "Ok",
          });
          // reset the input field
          form.reset();
          navigate("/login");
        });
      })
      .catch((error) => {
        console.error(error);
        // check for duplicate email usage
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email already is in use", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          toast.error("Invalid Email", {
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

  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1">
        <img src={login} alt="" />
      </div>
      <div className="flex-1 w-full border border-[#D0D0D0] p-8 md:p-20 rounded-xl">
        <h1 className="text-center text-sub-head text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">
          Sign Up
        </h1>
        <form onSubmit={handleRegister}>
          <span className="space-y-4">
            <p className="text-sub-head text-lg font-semibold">Name</p>
            <input
              className="text-placeholder w-full px-6 py-4 rounded-lg outline outline-1 outline-foot-details"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </span>
          <span className="space-y-4">
            <p className="text-sub-head text-lg font-semibold mt-8">Email</p>
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
          <span className="flex gap-3 mt-5">
            <input type="checkbox" name="terms" required />
            <p className="text-para mt-0.5">
              I agree the
              <a href="#" className="text-sub-head font-medium hover:text-head">
                &nbsp;Terms and Conditions
              </a>
            </p>
          </span>
          <button className="bg-special text-white text-xl font-semibold py-4 w-full rounded-lg my-8">
            <input type="submit" value="Sign Up" />
          </button>
        </form>
        <p className="text-center text-para text-lg">
          Already have an account?{" "}
          <Link to="/login" className="text-special font-semibold">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Register;
