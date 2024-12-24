import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import MyTutorCard from "../../components/MyTutorCard/MyTutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";

const MyTutorials = () => {
  const [tutors, setTutors] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    fetchMyTutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchMyTutor = async () => {
   const res = await axiosSecure.get(`/myTutors?email=${user?.email}`);
    setTutors(res.data);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
        <div>
            <h1 className="font-bold text-2xl text-center mb-5">My Tutorials</h1>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tutors.map((tutor) => (
          <MyTutorCard key={tutor._id} tutor={tutor} fetchMyTutor={fetchMyTutor}/>
        ))}
      </div>
    </div>
  );
};

export default MyTutorials;
