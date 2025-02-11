import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className="my-14">
      <h1 className="text-center font-bold text-3xl mb-5">Stats</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 justify-between p-5 rounded-lg">
        <div className="text-center bg-white dark:bg-black p-2 rounded-lg shadow-sm border">
          <p className="font-bold text-xl">32,000+</p>
          <p>Experience Tutors</p>
        </div>
        <div className="text-center bg-white dark:bg-black p-2 rounded-lg shadow-sm border">
          <p className="font-bold text-xl">25,000+</p>
          <p>5-star tutor reviews</p>
        </div>
        <div className="text-center bg-white dark:bg-black p-2 rounded-lg shadow-sm border">
          <p className="font-bold text-xl">120+</p>
          <p>Subjects Taught</p>
        </div>
        <div className="text-center bg-white dark:bg-black p-2 rounded-lg shadow-sm border">
          <p className="font-bold text-xl">180+</p>
          <p>Tutor Nationalities</p>
        </div>
        <div className="text-center bg-white dark:bg-black p-2 rounded-lg shadow-sm border">
          <div className="font-bold text-xl flex items-center gap-2 justify-center">
            4.8 <i className="flex items-center justify-end"><FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke /></i>{" "}
          </div>
          <p>On the app store</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
