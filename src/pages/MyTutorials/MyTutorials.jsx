import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import MyTutorCard from "../../components/MyTutorCard/MyTutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
   <section>
    <SectionTitle title='My Tutorials'/>
     <div className="lg:container mx-3 md:mx-3 py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tutors.map((tutor) => (
          <MyTutorCard key={tutor._id} tutor={tutor} fetchMyTutor={fetchMyTutor}/>
        ))}
      </div>
    </div>
   </section>
  );
};

export default MyTutorials;
