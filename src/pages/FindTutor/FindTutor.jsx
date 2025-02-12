import { useEffect, useState } from "react";
import TutorCard from "../../components/TutorCard/TutorCard";
import useAxiosSecure from "../../components/UseAxiosSecure/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const FindTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [originalTutors, setOriginalTutors] = useState([]); 
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const response = await axiosSecure.get("/tutors");
      setTutors(response.data);
      setOriginalTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  const fetchTutors = async (query) => {
    try {
      const response = await axiosSecure.get(`/search?language=${query}`);
      setTutors(response.data);
      setOriginalTutors(response.data);
    } catch (error) {
      console.error("Error fetching tutors:", error);
    }
  };

  const handleSearchChange = async (e) => {
    setSearch(e.target.value);
    fetchTutors(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    fetchTutors(search);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    if (order === "") {
      setTutors([...originalTutors]);
    } else {
      const sortedTutors = [...tutors].sort((a, b) => {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      });
      setTutors(sortedTutors);
    }
  };

  return (
    <section>
      <SectionTitle title="Find Tutors" />
      <div className="lg:container mx-3 dark:bg-black pb-10 pt-1">
        <div className="md:flex justify-between items-center">
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
          <div className="flex justify-center my-4">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="p-2 border rounded-md dark:text-black"
            >
              <option value="">Sort by (Default Random)</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
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
