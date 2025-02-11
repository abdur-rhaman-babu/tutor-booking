import Banner from "../../components/Banner/Banner";
import ConnectUs from "../../components/ConnectUs/ConnectUs";
import DiscoverTutor from "../../components/DiscoverTutor/DiscoverTutor";
import LanguageCategory from "../../components/LanguageCategory/LanguageCategory";
import Stats from "../../components/Stats/Stats";
import FindTutorCategory from "../FindTutorCategory/FindTutorCategory";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="lg:container mx-5 lg:mx-auto">
        <Stats />
        <LanguageCategory />
        <ConnectUs />
        <DiscoverTutor />
      </div>
    </div>
  );
};

export default Home;
