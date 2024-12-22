import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);

  console.log(tutors);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    await axios.get("http://localhost:5000/tutors").then((res) => {
      console.log(res.data);
      setTutors(res.data);
    });
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {tutors.map((tutor) => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))}
    </div>
  );
};

export default FindTutor;
