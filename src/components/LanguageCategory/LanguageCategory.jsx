import axios from "axios";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../UseAxiosSecure/useAxiosSecure";


const LanguageCategory = () => {
    const [categories, setCategories] = useState([]);
    const axiosSecure = useAxiosSecure()
  
    useEffect(() => {
        axiosSecure.get('/category').then((res) => {
          setCategories(res.data);
      });
    }, []);
  
    return (
      <div>
        <h1 className="text-center font-bold text-3xl my-5">Language Category</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div key={category._id}>
              <Link to={`/find-tutor/${category?.category}`}>
                <div className="text-center bg-white dark:bg-black p-2 rounded-xl border-gray-200 dark:border-gray-700 flex items-center justify-between  border cursor-pointer">
                  <img className="h-10 w-10" src={category?.logo} alt="" />
                  <p>{category?.title}</p>
                  <i>
                    <MdKeyboardArrowRight />
                  </i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default LanguageCategory;