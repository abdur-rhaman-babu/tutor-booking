import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const UpdateTutor = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [tutor, setTutor] = useState({});
  const axiosSecure = useAxiosSecure();
  const { photo, language, price, description, _id } = tutor;

  useEffect(() => {
    axiosSecure.get(`/update/${id}`).then((res) => {
      setTutor(res.data);
    });
  }, [id]);
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
    const tutors = { name, email, photo, price, language, description, review };
    // console.log(tutors)

    axios
      .post(`https://booking-tutor-server.vercel.app/update/${_id}`, tutors)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("tutor updated succssfully");
          navigate("/myTutorials");
        }
      });
  };
  return (
    <section>
      <SectionTitle title="Update Tutor" />
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-white dark:bg-black w-full max-w-4xl shrink-0 border dark:border-gray-800 p-6">
          <form
            onSubmit={handleUpdateTutor}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Name
                </span>
              </label>
              <input
                defaultValue={user?.displayName}
                name="name"
                type="name"
                placeholder="Name"
                className="input input-bordered dark:bg-gray-700 dark:text-white"
                readOnly
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Email
                </span>
              </label>
              <input
                defaultValue={user?.email}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered dark:bg-gray-700 dark:text-white"
                readOnly
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Photo URL
                </span>
              </label>
              <input
                defaultValue={photo}
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            {language && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Language
                  </span>
                </label>
                <select
                  defaultValue={language}
                  className="border p-3 rounded-lg dark:bg-gray-700 dark:text-white"
                  name="language"
                >
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
            )}

            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Price
                </span>
              </label>
              <input
                defaultValue={price}
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="form-control relative md:col-span-2">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Description
                </span>
              </label>
              <textarea
                className="border rounded-lg h-20 p-3 dark:bg-gray-700 dark:text-white"
                name="description"
                defaultValue={description}
                placeholder="Write a short description..."
                required
              ></textarea>
            </div>

            <div className="form-control mt-6 md:col-span-2">
              <button className="bg-primary py-2 rounded-lg hover:bg-blue-600 text-white font-bold w-full dark:bg-blue-800 dark:hover:bg-blue-600">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Update Tutor"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateTutor;
