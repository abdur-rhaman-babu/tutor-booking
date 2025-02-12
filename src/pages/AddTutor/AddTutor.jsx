import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import SectionTitle from "./../../components/SectionTitle/SectionTitle";

const AddTutor = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

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
    const tutors = { name, email, photo, price, language, description, review };

    axiosSecure.post("/tutors", tutors).then((res) => {
      if (res.data.insertedId) {
        toast.success("Tutor added successfully");
        navigate("/find-tutor");
      }
    });
  };

  return (
    <section>
      <SectionTitle title="Add Tutor" />

      <div className="flex justify-center items-center min-h-screen p-2">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Add Tutor
          </h2>
          <form
            onSubmit={handleAddTutorials}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">
                Name
              </label>
              <input
                defaultValue={user?.displayName}
                name="name"
                type="text"
                className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
                readOnly
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white mb-1">
                Email
              </label>
              <input
                defaultValue={user?.email}
                name="email"
                type="email"
                className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
                readOnly
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white mb-1">
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

            <div>
              <label className="block text-gray-700 dark:text-white mb-1">
                Language
              </label>
              <select
                name="language"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
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

            <div>
              <label className="block text-gray-700 dark:text-white mb-1">
                Price
              </label>
              <input
                name="price"
                type="text"
                placeholder="Enter price"
                className="input input-bordered dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-white mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Write a short description..."
                className="input input-bordered h-24 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary w-full p-3 rounded-lg"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button className="w-full bg-primary font-semibold hover:bg-blue-600 text-white py-3 rounded-lg transition">
                Add Tutor
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTutor;
