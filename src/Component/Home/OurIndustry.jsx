import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiRadioTower } from "react-icons/gi";
import { GiCargoCrane } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { BiFirstAid } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDeviceHub } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

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
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <RiComputerLine color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Consumer Electronics
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <BsAirplaneEngines color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Aerospace & Defense
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <BiSolidCarMechanic color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Automotive
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <GiRadioTower color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Telecommunications
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <BiFirstAid color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Healthcare & Medical Devices
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-[#001534] w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <GiCargoCrane color="#fff" size="55px" />
              </div>
            </div>
            <h3 className="  font-bold mt-2 mb-24 text-center ml-4">
              Industrial
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurIndustry;
