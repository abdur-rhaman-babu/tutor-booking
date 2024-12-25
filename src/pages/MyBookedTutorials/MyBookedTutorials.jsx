import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import MyBookedCard from "../../components/MyBookedCard/MyBookedCard";

const MyBookedTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchBookTutor()
  }, [user?.email]);

  const fetchBookTutor = async ()=>{
    axios
      .get(`http://localhost:5000/my-booked-tutor?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setTutors(res.data);
      });
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 max-w-7xl mx-auto">
      {tutors.map((tutor) => (
        <MyBookedCard key={tutor._id} tutor={tutor} />
      ))}
    </div>
  );
};

export default MyBookedTutorials;
