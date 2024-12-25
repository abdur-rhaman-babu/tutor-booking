import Banner from "../../components/Banner/Banner";
import ConnectUs from "../../components/ConnectUs/ConnectUs";
import LanguageCategory from "../../components/LanguageCategory/LanguageCategory";
import Stats from "../../components/Stats/Stats";
import FindTutorCategory from "../FindTutorCategory/FindTutorCategory";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Stats/>
            <LanguageCategory/>
            <ConnectUs/>
        </div>
    );
};

export default Home;