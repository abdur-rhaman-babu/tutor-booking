import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    await axiosSecure.get("/tutors").then((res) => {
      // console.log(res.data);
      setTutors(res.data);
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-10 dark:bg-black">
      <div>
        <h1 className="font-bold text-2xl text-center mb-5">Find Tutorials</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default FindTutor;
