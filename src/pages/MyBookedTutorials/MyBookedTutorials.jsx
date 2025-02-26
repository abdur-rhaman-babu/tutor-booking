import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import MyBookedCard from "../../components/MyBookedCard/MyBookedCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const MyBookedTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    fetchBookTutor()
  }, [user?.email]);

  const fetchBookTutor = async ()=>{
    axiosSecure
      .get(`/my-booked-tutor?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setTutors(res.data);
      });
  }

  
  return (
    <section>
      <SectionTitle title='My Booked Tutor'/>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 lg:container mx-3">
      {tutors.map((tutor) => (
        <MyBookedCard key={tutor._id} tutor={tutor} />
      ))}
    </div>
    </section>
  );
};

export default MyBookedTutorials;
