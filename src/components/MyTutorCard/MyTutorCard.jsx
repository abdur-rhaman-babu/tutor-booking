/* eslint-disable react/prop-types */
const MyTutorCard = ({ tutor }) => {
  const { name, photo, language, price, description, review } = tutor;
  return (
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    //   <img
    //     className="w-full h-48 object-cover"
    //     src={photo}
    //     alt={`${name}'s photo`}
    //   />
    //   <div className="p-4">
    //     <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    //     <p className="text-sm text-gray-600 mt-1">Language: {language}</p>
    //     <p className="text-sm text-gray-600 mt-1">Price: ${price}</p>
    //     <p className="text-sm text-gray-600 mt-1">Description: {description}</p>
    //     <p className="text-sm text-gray-600 mt-1">
    //       Review: <span className="text-gray-800 font-medium">{review}</span>
    //     </p>
    //     <div className="mt-4 flex gap-2">
    //       <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
    //         Delete
    //       </button>
    //       <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
    //         Update
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-md bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        className="w-full h-56 object-cover rounded-t-xl"
        src={photo}
        alt={`${name}'s photo`}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 italic">Review: {review}</p>
        <div className="flex items-center justify-between text-gray-700 mb-4">
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
            Language: {language}
          </span>
          <span className="text-lg font-semibold text-green-500">Price: ${price}</span>
        </div>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="flex gap-3">
          <button className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200">
            Delete
          </button>
          <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTutorCard;
