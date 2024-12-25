import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TutorCard from "../../components/TutorCard/TutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";

const FindTutorCategory = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure.get(`/tutors/${category}`).then((res) => {
      setTutors(res.data);
    });
  }, [category]);
  return (
    <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-2xl text-center mb-5 font-bold">Tutor for {category}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tutors.length === 0 ? (
          <p className="text-2xl text-center mb-5 font-bold">No Tutor Found for {category}</p>
        ) : (
          tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))
        )}
      </div>
    </div>
  );
};

export default FindTutorCategory;
