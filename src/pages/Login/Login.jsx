import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, setUser, signInWithGoogle, loading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch(() => {
        setError("Invalid email or password");
        toast.error("Login failed. Please try again.");
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      toast.success("Logged in successfully");
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black">
      <div className="card bg-white dark:bg-gray-800 dark:border-gray-700 w-full max-w-md p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Login to your account
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <div className="form-control">
            <label className="label text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
              required
            />
            <div className="text-right">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <button className="bg-primary font-semibold hover:bg-blue-600 duration-300 w-full py-3 rounded-lg text-white text-lg">
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Login"
            )}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
        <div
          onClick={handleSignInWithGoogle}
          className="border-2 cursor-pointer flex items-center justify-center p-3 gap-3 rounded-lg mt-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <FcGoogle size={25} />
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Login With Google
          </span>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link className="text-primary hover:underline" to="/register">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
