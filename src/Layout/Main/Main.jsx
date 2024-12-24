import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="min-h-[80vh] pt-20">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Main;
