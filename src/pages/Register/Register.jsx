import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { setError, error, createUser, setUser, userUpdateProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const lowerCase = /[a-z]/;
    if (!lowerCase.test(password)) {
      setError("Password must be at least one lowercase letter");
    }

    const upperCase = /[A-Z]/;
    if (!upperCase.test(password)) {
      setError("Password must be at least one uppercase letter");
    }

    if (password.length < 6) {
      setError("Password must be 6 character or upper");
    }

    const profile = {
      displayName: name,
      photoURL: photo
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        userUpdateProfile(profile)
        navigate('/')
      })
      .catch((error) => {
        console.log(error, "Error");
      });  
      

  };
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 dark:bg-black dark:border-2 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="password"
              className="input input-bordered dark:text-black"
              required
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-12 right-4 mt-1"
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </i>
          </div>
          <p className="text-red-600">{error}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            Already have an account?{" "}
            <Link className="text-red-600" to="/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
