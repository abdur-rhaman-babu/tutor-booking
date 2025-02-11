import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import slider_1 from "../../assets/Image/banner_1.jpg";
import slider_2 from "../../assets/Image/banner_2.jpg";
import slider_3 from "../../assets/Image/banner_3.jpg";
import { Link } from "react-router-dom";

const BannerText = () => (
  <div className="flex flex-col space-y-4 md:w-1/2 max-w-lg dark:text-white ">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
      We are here for your care
    </h2>
    <h1 className="font-bold text-5xl text-gray-900 dark:text-white">Find Your Best <span className="text-primary">Tutor</span></h1>
    <p>
      Here you can find your best tutor the easiest way. It can be a good
      opportunity for seeking your best teacher.
    </p>
    <div>
      <Link to='/find-tutor'><button className="bg-primary duration-300 hover:bg-blue-600 px-4 rounded-md font-semibold text-white py-2">
        Find All Tutor
      </button></Link>
    </div>
  </div>
);

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {[slider_1, slider_2, slider_3].map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-between px-4 py-8 md:px-16 bg-white dark:bg-black h-[500px]">
            <BannerText />

            <div className="hidden md:block md:w-1/2 md:h-full">
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg"
                src={slide}
                alt={`Banner ${index + 1}`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
