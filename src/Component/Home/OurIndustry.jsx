import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { featureInfo } from "../Info/Info";

const OurIndustry = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold px-6 lg:px-0 text-center my-12">
        Our Industry
      </h1>

      <Swiper
        autoplay={{
          delay: 0,
        }}
        speed={10000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },

          480: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 3,
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
        {featureInfo.map((f) => (
          <SwiperSlide key={f.id}>
            <div className="flex justify-start lg:items-start items-center gap-3 mt-6">
              <img className="w-6" src={f.img} alt="logo" />
              <div>
                <h3 className="lg:text-xl font-bold my-1">{f.title}</h3>
                {/* <Link to="/coming" className="text-gray-600 text-xs">
                  {f.btn}
                </Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurIndustry;
