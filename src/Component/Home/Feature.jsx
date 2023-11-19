import { manageSpeedInfo } from "../Info/Info";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const Feature = () => {
  return (
    <div className="my-24">
      <div className="text-center my-12">
        <h1 className="text-4xl font-semibold px-6 lg:px-0">
          One Flexible, Integrated, and Collaborative Platform
        </h1>
        <div className="flex justify-center items-center ">
          <p className="lg:text-xl mr-2">Data-driven tools for</p>

          <div className="mt-6">
            <Swiper
              direction={"vertical"}
              autoplay={{
                delay: 500,
              }}
              speed={2000}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper h-12"
            >
              <SwiperSlide>
                <p className="border-b-2  font-bold   border-b-purple-500  w-48 ">
                  Business Leadership
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="border-b-2  font-bold   border-b-red-500  w-48 ">
                  Compliance Managers
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className=" border-b-2  font-bold   border-b-yellow-500  w-48  ">
                  ESG Strategist
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="border-b-2  font-bold   border-b-green-500  w-48  ">
                  Supply Chain Managers
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className=" border-b-2  font-bold   border-b-orange-500  w-48  ">
                  Design Engineers
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className=" border-b-2  font-bold   border-b-blue-500  w-48 ">
                  Component Engineers
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 lg:mx-32 mx-6 my-12">
        {manageSpeedInfo.map((info) => (
          <div key={info.id}>
            <div className="font-semibold p-6 border border-gray-700 lg:h-[420px] h-80 rounded-lg hover:border-gray-300 relative">
              <div className="mb-4">
                <p>{info.img}</p>
              </div>
              <h1 className="text-xl font-bold">{info.name}</h1>
              <p className="my-4 ">{info.des} </p>

              <a href={info.email}>
                <button className="pointer text-[#001534] font-bold flex items-center absolute bottom-4 right-2  btn btn-ghost">
                  {info.btn}
                  <BsArrowRight size="25px" color="#001534" className="ml-2 " />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-10  lg:mx-24 mx-6">
        {featureInfo.map((f) => (
          <div
            key={f.id}
            className="font-bold shadow-lg my-6 border-2 lg:w-[350px] p-8 h-[570px]  w-[340px] relative"
          >
            <img className="w-8 my-3" src={f.img} alt="Image" />
            <h1 className="text-2xl my-2"> {f.title}</h1>

            <p className=" mb-3">{f.para}</p>
            <div className="divider w-56"></div>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" /> {f.feature1}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature2}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature3}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature4}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature5}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature6}
            </p>
            <div className=" lg:mx-8 absolute bottom-5 left-0 px-2">
              <Link to="/coming">
                {" "}
                <PrimaryButton text={f.btn} />
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Feature;
