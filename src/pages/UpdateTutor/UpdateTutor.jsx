import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
const UpdateTutor = () => {
    const { user } = useContext(AuthContext);
    const {id} = useParams()
    const navigate = useNavigate();
    const [tutor, setTutor] = useState({})

    const {photo, language, price,description, _id } = tutor;

    useEffect(()=>{
        axios.get(`http://localhost:5000/update/${id}`)
        .then(res=>{
            setTutor(res.data)
        })
    },[id])
    const handleUpdateTutor = (e) => {
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
      // console.log(tutors)
  
      axios.post(`http://localhost:5000/update/${_id}`, tutors)
      .then(res=> {
          if(res.data.modifiedCount){
              toast.success('tutor updated succssfully')  
              navigate('/myTutorials')  
          }
      })
    };
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateTutor} className="card-body">
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
            defaultValue={photo}
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

            <select defaultValue={language} className="border p-3 rounded-lg" name="language" id="">
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
            defaultValue={price}
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
              defaultValue={description}
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

export default UpdateTutor;