import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh] mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
