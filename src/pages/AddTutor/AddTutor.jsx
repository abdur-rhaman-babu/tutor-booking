import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";

const AddTutor = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()
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
    const tutors = {name, email, photo, price, language, description, review}
    
    axiosSecure.post('/tutors', tutors)
    .then(res=> {
        if(res.data.insertedId){
            toast.success('tutor added succssfully')  
            navigate('/find-tutor')  
        }
    })
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 dark:bg-black dark:border-2 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAddTutorials} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered dark:text-black"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered dark:text-black"
              readOnly
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
              className="input input-bordered dark:text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Language</span>
            </label>

            <select className="border p-3 rounded-lg dark:text-black" name="language" id="">
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
              <span className="label-text dark:text-white">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="price"
              className="input input-bordered dark:text-black"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text dark:text-white">Description</span>
            </label>

            <textarea
              className="border rounded-lg h-20 p-3 dark:text-black"
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
