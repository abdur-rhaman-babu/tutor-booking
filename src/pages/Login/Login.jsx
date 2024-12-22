import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
const handleLogin = (e) =>{
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const user = {email, password}
  console.log(user)
}
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="border-2 cursor-pointer flex items-center justify-center p-2 gap-2 rounded-lg">
                <i><FcGoogle size={25} /></i>
                <span className="font-semibold">Login With Google</span>
          </div>
          <p>Do not have an account? <Link className="text-red-600" to='/register'>Register Now</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
