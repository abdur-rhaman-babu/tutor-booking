/* eslint-disable react/prop-types */
const TutorCard = ({ tutor }) => {
  const { name, photo, language, review } = tutor;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={photo}
        alt={`${name}'s photo`}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">Language: {language}</p>
        <p className="text-sm text-gray-600 mt-1">
          Review: <span className="text-gray-800 font-medium">{review}</span>
        </p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TutorCard;
