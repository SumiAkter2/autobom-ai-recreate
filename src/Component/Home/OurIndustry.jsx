import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { featureInfo } from "../Info/Info";

const OurIndustry = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold px-6 lg:px-0 text-center my-12">
        Our Industry
      </h1>

      <div className="px-6 lg:px-12  mx-auto">
        <Swiper
          pagination={{
            clickable: true,
            type: "bullets",
            // el: ".swiper-pagination",
            dynamicMainBullets: 1,
            position: "bottom",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-navigation-color": "gray",
            "--swiper-pagination-color": "#001534",
            " --swiper-pagination-bullet-size": " 20px",
            "--swiper-pagination-bullet-width": " 20px",
            "--swiper-pagination-bullet-height": " 20px",
          }}
          className="mySwiper "
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },

            480: {
              slidesPerView: 1.5,
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
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
          }}
        >
          {featureInfo.map((f) => (
            <SwiperSlide key={f.id} className="px-12">
              <div className=" text-center mt-6 border p-8 rounded-md border-[#f2c83b] bg-[#001534] mb-24 w-48 h-56 text-white">
                <div className="flex justify-center items-center my-6">
                  <img className="w-6" src={f.img} alt="logo" />
                </div>
                <div>
                  <h3 className="lg:text-xl font-bold my-1">{f.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurIndustry;
