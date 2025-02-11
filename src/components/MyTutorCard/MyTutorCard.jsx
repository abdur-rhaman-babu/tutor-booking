import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";

/* eslint-disable react/prop-types */
const MyTutorCard = ({ tutor, fetchMyTutor }) => {
  const { name, photo, language, price, description, review, _id } = tutor;
  const axiosSecure = useAxiosSecure();
  const [isHovered, setIsHovered] = useState(false);

  const handleDeleteTutor = async (id) => {
    await axiosSecure.delete(`/tutor/${id}`).then((res) => {
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
    <div
      className="relative max-w-md bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center mt-4">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
          src={photo}
          alt={`${name}'s photo`}
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Review: {review}
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
            {language}
          </span>
          <span className="text-lg font-semibold text-green-500">
            Price: ${price}
          </span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          {description}
        </p>
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => handleDeleteWithToast(_id)}
          className="text-white text-3xl p-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-200 mb-3"
          title="Delete"
        >
          <FaTrash />
        </button>
        <Link
          className="text-white text-3xl p-3 rounded-full bg-primary transition duration-200"
          to={`/update/${_id}`}
          title="Edit"
        >
          <FaEdit />
        </Link>
      </div>
    </div>
  );
};

export default MyTutorCard;
