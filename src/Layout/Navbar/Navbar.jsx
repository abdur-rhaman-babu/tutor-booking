import { NavLink } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-16 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/findTutor">Find Tutors</NavLink>
            </li>
            <li>
              <NavLink to="/addTutor">Add Tutorials</NavLink>
            </li>
            <li>
              <NavLink to="/myTutorials">My Tutorials</NavLink>
            </li>
            <li>
              <NavLink to="/myBookedTutorials">My Booked Tutorials</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="h-8 w-8 md:h-10 md:w-10" src={logo} alt="" />
          <p className="md:text-2xl text-xl font-semibold">EduSphere</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/findTutor">Find Tutors</NavLink>
            </li>
            <li>
              <NavLink to="/addTutorials">Add Tutorials</NavLink>
            </li>
            <li>
              <NavLink to="/myTutorials">My Tutorials</NavLink>
            </li>
            <li>
              <NavLink to="/myBookedTutorials">My Booked Tutorials</NavLink>
            </li>
            <li className="border-2 rounded-lg ml-3">
              <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <i className="cursor-pointer"><CiLight size={35} /></i>
      </div>
    </div>
  );
};

export default Navbar;
