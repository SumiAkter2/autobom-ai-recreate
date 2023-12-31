import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { GiRadioTower } from "react-icons/gi";
import { GiCargoCrane } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { BiFirstAid } from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const OurIndustry = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold px-6 lg:px-0 text-center my-12">
        Our Industries
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
          autoplay={{
            delay: 1000,
          }}
          modules={[Pagination, Autoplay]}
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
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24 `}
            >
              <div className="flex  justify-center items-center ">
                <RiComputerLine color="#fff" size="55px" />
              </div>
              <h3 className=" font-bold text-center  mt-3 ">
                Consumer Electronics
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24`}
            >
              <div className="flex justify-center items-center">
                <BsAirplaneEngines color="#fff" size="55px" />
              </div>
              <h3 className="  font-bold  text-center ">Aerospace & Defense</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24`}
            >
              <div className="flex justify-center items-center ">
                <BiSolidCarMechanic color="#fff" size="55px" />
              </div>
              <h3 className="  font-bold text-center mt-3">Automotive</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24`}
            >
              <div className="flex justify-center items-center ">
                <GiRadioTower color="#fff" size="55px" />
              </div>
              <h3 className="  font-bold text-center mt-3">
                Telecommunications
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24`}
            >
              <div className="flex justify-center items-center ">
                <BiFirstAid color="#fff" size="55px" />
              </div>
              <h3 className="  font-bold text-center mt-3">
                Healthcare & Medical Devices
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 text-white mb-24`}
            >
              <div className="flex justify-center items-center ">
                <GiCargoCrane color="#fff" size="55px" />
              </div>
              <h3 className="  font-bold  text-center mt-3">Industrial</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurIndustry;
