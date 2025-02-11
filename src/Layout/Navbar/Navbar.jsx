// import { NavLink } from "react-router-dom";
// import logo from "../../assets/Image/logo.png";
// import { CiDark, CiLight } from "react-icons/ci";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Context/AuthContext/AuthContext";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import toast from "react-hot-toast";
// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const [theme, setTheme] = useState(false);

//   useEffect(() => {
//     if (theme) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         toast.success("signout successfull");
//       })
//       .catch((error) => {});
//   };
//   return (
//     <div className="navbar bg-white dark:bg-black text-text dark:text-white border-b shadow-lg fixed top-0 left-0 right-0 z-50 lg:px-16 px-4">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/find-tutor">Find Tutors</NavLink>
//             </li>
//             <li>
//               <NavLink to="/addTutor">Add Tutorials</NavLink>
//             </li>
//             <li>
//               <NavLink to="/myTutorials">My Tutorials</NavLink>
//             </li>
//             <li>
//               <NavLink to="/myBookedTutorials">My Booked Tutorials</NavLink>
//             </li>
//             {user?.email ? (
//               <div>
//                 <button
//                   onClick={handleSignOut}
//                   className="border-2 p-2 rounded-lg"
//                 >
//                   Logout
//                 </button>
//                 <img
//                   className="w-12 h-12 rounded-lg mt-2 cursor-pointer"
//                   src={user?.photoURL}
//                   alt=""
//                 />
//               </div>
//             ) : (
//               <li className="border-2 rounded-lg ml-3">
//                 <NavLink to="/login">Login</NavLink>
//               </li>
//             )}
//           </ul>
//         </div>
//         <div className="flex items-center gap-3">
//           <img className="h-8 w-8 md:h-10 md:w-10" src={logo} alt="" />
//           <p className="md:text-2xl text-xl font-semibold">TutorBooking</p>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/find-tutor">Find Tutors</NavLink>
//           </li>
//           <li>
//             <NavLink to="/addTutorials">Add Tutorials</NavLink>
//           </li>
//           <li>
//             <NavLink to="/myTutorials">My Tutorials</NavLink>
//           </li>
//           <li>
//             <NavLink to="/myBookedTutorials">My Booked Tutorials</NavLink>
//           </li>
//           {user?.email ? (
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={handleSignOut}
//                 className="border-2 p-2 rounded-lg"
//               >
//                 Logout
//               </button>
//               <img
//                 data-tooltip-id="my-tooltip-1"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 referrerpolicy="no-referrer"
//                 src={user?.photoURL}
//                 alt=""
//               />
//               <ReactTooltip
//                 id="my-tooltip-1"
//                 place="bottom"
//                 content={user?.displayName}
//               />
//             </div>
//           ) : (
//             <li className="border-2 cursor-pointer rounded-lg ml-3">
//               <NavLink to="/login">Login</NavLink>
//             </li>
//           )}
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <button onClick={() => setTheme(!theme)} className="cursor-pointer">
//           {theme ? <CiLight size={35} /> : <CiDark size={35} />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
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
    <nav className="bg-white dark:bg-black text-black dark:text-white border-b shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center py-3">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          <div className="flex items-center gap-3">
            <img className="h-8 w-8 md:h-10 md:w-10" src={logo} alt="Logo" />
            <p className="md:text-2xl text-xl font-semibold">TutorBooking</p>
          </div>
        </div>

        <ul className="hidden lg:flex space-x-6">
          {links.map(
            (link) =>
              (!link.protected || user?.email) && (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg transition-all duration-300 ${
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
                  <button onClick={handleSignOut}>
                    Logout
                  </button>
                </li>
              </ul>
              
            </div>
          ) : (
            <NavLink to="/login" className="border-2 px-4 py-2 rounded-lg">
              Login
            </NavLink>
          )}

          <button onClick={() => setTheme(!theme)} className="cursor-pointer">
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
                        `px-4 py-2 rounded-lg transition-all duration-300 ${
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
