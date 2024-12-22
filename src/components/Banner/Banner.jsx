import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import slider_1 from '../../assets/Image/banner_1.jpg'
import slider_2 from '../../assets/Image/banner_2.jpg'
import slider_3 from '../../assets/Image/banner_3.jpg'
const Banner = () => {
    return (
        <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='w-full h-[500px]' src={slider_1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px]' src={slider_2} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px]' src={slider_3} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;