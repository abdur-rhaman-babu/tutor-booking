import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Image/nav_logo.png";
import { CiDark, CiLight } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Find Tutors", path: "/find-tutor" },
    { name: "Add Tutorials", path: "/addTutorials", protected: true },
    { name: "My Tutorials", path: "/myTutorials", protected: true },
    {
      name: "My Booked Tutorials",
      path: "/myBookedTutorials",
      protected: true,
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Sign-out successful"))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-white dark:bg-black text-black dark:border-b-gray-800 dark:text-white border-b shadow-sm fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          <Link to='/'><div className="flex items-center gap-3">
            <img className="h-8 w-8 md:h-10 md:w-10" src={logo} alt="Logo" />
            <p className="font-bold text-2xl dark:text-white hidden md:block text-primary uppercase font-mono">Tutor <span>Booking</span></p>
          </div></Link>
        </div>

        <ul className="hidden lg:flex space-x-6">
          {links.map(
            (link) =>
              (!link.protected || user?.email) && (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
                        isActive
                          ? "text-primary font-semibold border-b-2 border-primary"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              )
          )}
        </ul>

        <div className="flex items-center gap-4">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2"
              >
                <img
                  data-tooltip-id="tooltip-user"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Avatar"
                />
                <ReactTooltip
                  id="tooltip-user"
                  place="bottom"
                  content={user?.displayName}
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-black dark:text-white mt-3 w-48 p-2 shadow"
              >
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-primary text-white font-semibold px-4 py-2 rounded-lg"
            >
              Login
            </NavLink>
          )}

          <button onClick={() => setTheme(!theme)} className="cursor-pointer text-primary dark:text-white">
            {theme ? <CiLight size={30} /> : <CiDark size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-black text-text dark:text-white border-t">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map(
              (link) =>
                (!link.protected || user?.email) && (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
                          isActive
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
