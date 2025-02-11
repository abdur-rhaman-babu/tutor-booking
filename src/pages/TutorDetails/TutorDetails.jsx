import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [tutor, setTutor] = useState({});
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { name, photo, language, description, price, review, _id, email } =
    tutor;
  // console.log(tutor);
  useEffect(() => {
    fetchTutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchTutor = async () => {
    await axiosSecure.get(`/details/${id}`).then((res) => {
      setTutor(res.data);
    });
  };

  const handleBookedTutor = () => {
    const bookedTutor = {
      name,
      tutorId: _id,
      photo,
      language,
      price,
      tutor_email: email,
      user_email: user?.email,
    };

    axiosSecure
      .post("/my-booked-tutor", bookedTutor, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("My booked tutor successfully added");
          navigate("/myBookedTutorials");
        }
      });
  };

  return (
    <section className="pb-10">
      <SectionTitle title='Tutor Details'/>
      <div className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col md:flex-row">
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
              <p className="text-lg font-semibold text-green-600">
                Price: ${price}
              </p>
              <p className="text-sm text-yellow-500">Review: {review}</p>
            </div>
            <button
              onClick={handleBookedTutor}
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetails;
