import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import f1Img from "../../assets/Feature/f1.webp";
import f2Img from "../../assets/Feature/f2.webp";
import f3Img from "../../assets/Feature/f3.webp";
import f4Img from "../../assets/Feature/f4.webp";
import f5Img from "../../assets/Feature/f5.webp";
import f6Img from "../../assets/Feature/f6.webp";

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
              className={`text-center mt-12 p-8 rounded-md bg-red-400 w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f1Img} alt="logo" />
              </div>
            </div>
            <h3 className=" lg:text-xl font-bold mt-2 mb-24 text-center ml-4">
              Autobom
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-green-400 w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f2Img} alt="logo" />
              </div>
            </div>
            <h3 className=" lg:text-xl font-bold mt-2 mb-24 text-center ml-4">
              Compliance Manager
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-yellow-400 w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f3Img} alt="logo" />
              </div>
            </div>
            <h3 className=" lg:text-xl font-bold mt-2 mb-24 text-center ml-4">
              Supply Chain Watch
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-purple-400 w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f4Img} alt="logo" />
              </div>
            </div>
            <h3 className=" lg:text-xl font-bold mt-2 mb-24 text-center ml-4">
              Sub-Tier Intelligence
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div
              className={`text-center mt-12 p-8 rounded-md bg-blue-400 w-48 h-48 `}
            >
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f5Img} alt="logo" />
              </div>
            </div>
            <h3 className=" lg:text-xl font-bold mt-2 mb-24 text-center ml-4">
              PCN Manager
            </h3>
          </SwiperSlide>
          <SwiperSlide className="px-12">
            <div className={` mt-12 p-8 rounded-md bg-sky-400 w-48 h-48 `}>
              <div className="flex justify-center items-center my-6">
                <img className="w-12" src={f6Img} alt="logo" />
              </div>
            </div>
            <h3 className="lg:text-xl  font-bold mt-2 mb-24 text-center ml-4">
              Supplier Insights
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurIndustry;
