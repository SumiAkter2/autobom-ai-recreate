import img1 from "../../assets/dashboard/Flex_(company)-Logo.wine.png";
import img2 from "../../assets/dashboard/t.png";
import img3 from "../../assets/dashboard/gm.png";
import img4 from "../../assets/dashboard/ford.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const Brand = () => {
  return (
    <div className="bg-white shadow-lg py-2">
      <Swiper
        autoplay={{
          delay: 0,
        }}
        speed={10000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="my-6 "
      >
        <SwiperSlide>
          <img className="w-32 " src={img1} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img2} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img3} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32 h-20" src={img4} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32" src={img1} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img2} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-20" src={img3} alt="brand image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-32 h-20" src={img4} alt="brand image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brand;
