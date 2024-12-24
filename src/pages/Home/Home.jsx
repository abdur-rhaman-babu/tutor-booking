import Banner from "../../components/Banner/Banner";
import ConnectUs from "../../components/ConnectUs/ConnectUs";
import Stats from "../../components/Stats/Stats";
import FindTutorCategory from "../FindTutorCategory/FindTutorCategory";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Stats/>
            <FindTutorCategory/>
            <ConnectUs/>
        </div>
    );
};

export default Home;