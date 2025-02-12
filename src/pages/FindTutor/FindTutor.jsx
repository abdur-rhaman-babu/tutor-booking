import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleSearchChange = async (e) => {
    setSearch(e.target.value);
    const response = await axiosSecure.get(`/search?language=${search}`);
    setTutors(response.data);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const response = await axiosSecure.get(`/search?language=${search}`);
    setTutors(response.data);
  };

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    await axiosSecure.get("/tutors").then((res) => {
      setTutors(res.data);
    });
  };

  return (
    <section>
      <SectionTitle title="Find Tutors" />
      <div className="lg:container mx-3 dark:bg-black pb-10 pt-1">
        <div>
          <form onSubmit={handleSearchSubmit}>
            <fieldset className="form-control w-80 mx-auto my-5">
              <div className="join">
                <input
                  value={search}
                  onChange={handleSearchChange}
                  type="text"
                  placeholder="Search now"
                  className="input input-bordered join-item dark:text-black"
                />
                <button className="bg-primary hover:bg-blue-600 text-white join-item px-2">
                  Search
                </button>
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
    </section>
  );
};

export default FindTutor;
