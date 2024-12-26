import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setError("Email or Password invalid");
      });
  };

  const handleSignInwithGoogle = () => {
    signInWithGoogle().then(() => {
      toast.success("logged in successfull");
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 dark:bg-black dark:border-2 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered dark:text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered dark:text-black"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover dark:text-white"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-red-600">{error}</p>
          <div
            onClick={handleSignInwithGoogle}
            className="border-2 cursor-pointer flex items-center justify-center p-2 gap-2 rounded-lg"
          >
            <i>
              <FcGoogle size={25} />
            </i>
            <span className="font-semibold">Login With Google</span>
          </div>
          <p>
            Do not have an account?{" "}
            <Link className="text-red-600" to="/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
