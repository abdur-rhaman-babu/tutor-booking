import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyTutorCard = ({ tutor, fetchMyTutor }) => {
  const { name, photo, language, price, description, review, _id } = tutor;
  const handleDeleteTutor = async (id) => {
    await axios.delete(`http://localhost:5000/tutor/${id}`).then((res) => {
      // console.log(res.data)
      if (res.data.deletedCount > 0) {
        toast.success("Tutor Successfully deleted");
        fetchMyTutor();
      }
    });
  };

  const handleDeleteWithToast = (id) => {
    toast((t) => (
      <div>
        <div className="flex items-center gap-2">
          <span>
            Are you <b>sure?</b>
          </span>
          <div className="flex items-center gap-2">
            <button
              className="bg-red-600 px-2 py-1 rounded-sm text-white font-semibold"
              onClick={() => {
                toast.dismiss(t.id);
                handleDeleteTutor(id);
              }}
            >
              Yes
            </button>
            <button
              className="bg-green-600 px-2 py-1 rounded-sm text-white font-semibold"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="max-w-md bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col">
      <img
        className="w-full h-56 object-cover rounded-t-xl"
        src={photo}
        alt={`${name}'s photo`}
      />
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 italic">Review: {review}</p>
        <div className="flex items-center justify-between text-gray-700 mb-4">
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
            Language: {language}
          </span>
          <span className="text-lg font-semibold text-green-500">
            Price: ${price}
          </span>
        </div>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="mt-auto flex gap-3">
          <button
            onClick={() => handleDeleteWithToast(_id)}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
          <Link className="flex-1 text-center bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200" to={`/update/${_id}`}>
            <button>
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyTutorCard;
