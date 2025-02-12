import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TutorCard = ({ tutor }) => {
  const { name, photo, language, _id, review, price } = tutor;

  return (
    <div className="relative max-w-md bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
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
      </div>

      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link to={`/details/${_id}`}>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
