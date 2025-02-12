import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, userUpdateProfile, loading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        userUpdateProfile(profile);
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch(() => {
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen dark:black">
      <div className="card bg-white dark:bg-gray-800 dark:border-gray-700 w-full max-w-4xl p-8 rounded-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Join us today!
        </p>
        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control">
            <label className="label text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
              required
            />
            <div
              className="absolute top-14 right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center col-span-2">
              {error}
            </p>
          )}
          <button className="bg-primary w-full py-3 rounded-lg text-white text-lg duration-300 hover:bg-blue-600 col-span-2">
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Register Now"
            )}
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            className="text-primary font-semibold hover:underline"
            to="/login"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
