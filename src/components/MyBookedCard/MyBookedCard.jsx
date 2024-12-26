const MyBookedCard = ({ tutor }) => {
  const { name, photo, language, price} = tutor;

  return (
    <div className="max-w-sm rounded overflow-hidden dark:bg-black shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={photo} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base dark:text-white ">Language: {language}</p>
        <p className="text-gray-700 text-base dark:text-white">Price: ${price}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Review
        </button>
      </div>
    </div>
  );
};

export default MyBookedCard;
