import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";

const TutorDetails = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState({});
  const axiosSecure = useAxiosSecure()
  const { name, photo, language, description, price, review } = tutor;
  useEffect(() => {
    fetchTutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchTutor = async () => {
    await axiosSecure.get(`/details/${id}`).then((res) => {
      setTutor(res.data);
    });
  };
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col md:flex-row">
      <img
        className="w-full md:w-1/2 h-48 md:h-auto object-cover"
        src={photo}
        alt={`${name}`}
      />

      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-sm text-gray-600">Language: {language}</p>
          <p className="text-gray-700 my-4 line-clamp-3">{description}</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-green-600">Price: ${price}</p>
            <p className="text-sm text-yellow-500">Review: {review}</p>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
