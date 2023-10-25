import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import shop from "../../assets/icons/shop.svg";
import search from "../../assets/icons/search.svg";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-base lg:text-lg font-semibold"
              : "text-sub-head text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-base lg:text-lg font-semibold"
              : "text-sub-head text-sm md:text-base lg:text-lg font-medium"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-base lg:text-lg font-semibold"
              : "text-sub-head text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-base lg:text-lg font-semibold"
              : "text-sub-head text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-special text-sm md:text-base lg:text-lg font-semibold"
              : "text-sub-head text-sm md:text-base lg:text-lg font-medium"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="navbar bg-base-100 my-5 md:my-10 lg:my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img className="w-16 md:w-24 lg:w-full" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 md:gap-8">
          <div className="flex items-center gap-1.5 md:gap-5">
            <button>
              <img src={shop} alt="" />
            </button>
            <button>
              <img src={search} alt="" />
            </button>
          </div>
          <button className="text-special text-xs md:text-base lg:text-lg font-semibold border border-special rounded-md px-2 py-1.5 md:px-5 md:py-3 hover:bg-special hover:text-white">
            Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
