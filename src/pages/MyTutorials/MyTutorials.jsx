import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import MyTutorCard from "../../components/MyTutorCard/MyTutorCard";

const MyTutorials = () => {
  const [tutors, setTutors] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchMyTutor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  const fetchMyTutor = async () => {
    const res = await axios.get(`http://localhost:5000/myTutors?email=${user?.email}`, {withCredentials:true});
    setTutors(res.data);
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 my-10">
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
