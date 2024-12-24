import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const MyBookedTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-booked-tutor?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setTutors(res.data);
      });
  }, []);
  return (
    <div>
      <h1>My Booked Tutorials:{tutors.length}</h1>
    </div>
  );
};

export default MyBookedTutorials;
