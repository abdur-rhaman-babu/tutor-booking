import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const TutorCard = ({ tutor }) => {


  const { name, photo, language, _id, review, price } = tutor;
  return (
    <div>
      
      <div className="max-w-sm bg-white border dark:bg-black border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt={`${name}'s photo`}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mt-1 dark:text-white">
            Language: {language}
          </p>
          <p className="text-sm text-red-800 mt-1 dark:text-white">
            paice: ${price}
          </p>
          <p className="text-sm text-gray-600 mt-1 dark:text-white">
            Review:{" "}
            <span className="text-gray-800 font-medium dark:text-white">
              {review}
            </span>
          </p>
          <Link to={`/details/${_id}`}>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
