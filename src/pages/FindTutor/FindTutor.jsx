import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import axios from "axios";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure()

  const handleSearchChange = async (e)=>{
    setSearch(e.target.value)
    const response = await axiosSecure.get(`/search?language=${search}`);
    setTutors(response.data);
  }

  const handleSearchSubmit = async (e) =>{
    e.preventDefault()
    const response = await axiosSecure.get(`/search?language=${search}`);
    setTutors(response.data);
  }

  useEffect(() => { 
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    await axiosSecure.get("/tutors").then((res) => {
      setTutors(res.data);
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-10 dark:bg-black">
      <div>
        <h1 className="font-bold text-2xl text-center mb-5">Find Tutorials</h1>
        <form onSubmit={handleSearchSubmit}>
        <fieldset className="form-control w-80 mx-auto my-5">
          <label className="label">
            <span className="label-text dark:text-white">Seach Here</span>
          </label>
          <div className="join">
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search now"
              className="input input-bordered join-item dark:text-black"
            />
            <button className="btn btn-primary join-item">Search</button>
          </div>
        </fieldset>
      </form>
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
