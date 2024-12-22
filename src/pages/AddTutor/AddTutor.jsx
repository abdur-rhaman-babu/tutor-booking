import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AddTutor = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddTutorials = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const price = form.price.value;
    const language = form.language.value;
    const description = form.description.value;
    const review = 0;
    const tutorial = {name, email, photo, price, language, description, review}
    console.log(tutorial)
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAddTutorials} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
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
              <span className="label-text">Language</span>
            </label>

            <select className="border p-3 rounded-lg" name="language" id="">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Arabic">Arabic</option>
              <option value="Japanese">Japanese</option>
              <option value="Portuguese">Portuguese</option>
            </select>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Description</span>
            </label>

            <textarea
              className="border rounded-lg h-20 p-3"
              name="description"
              id=""
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Tutorials</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutor;
