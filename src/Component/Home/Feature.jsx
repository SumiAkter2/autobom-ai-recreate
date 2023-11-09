import { featureInfo } from "../Info/Info";
import { MdOutlineDone } from "react-icons/md";
import PrimaryButton from "../Share/Button/PrimaryButton";
import "./Feature.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";

const Feature = () => {
  return (
    <div className="my-24">
      <div className="text-center my-12">
        <h1 className="text-4xl font-semibold">
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
                <p className="border-b-2  font-semibold   border-b-purple-500  w-48 p-1 ">
                  Business Leadership
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="border-b-2  font-semibold   border-b-red-500  w-48 p-1 ">
                  Compliance Managers
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className=" border-b-2  font-semibold   border-b-yellow-500  w-48 p-1 ">
                  ESG Strategist
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="border-b-2  font-semibold   border-b-green-500  w-48 p-1 ">
                  Supply Chain Managers
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className=" border-b-2  font-semibold   border-b-orange-500  w-48 p-1 ">
                  Design Engineers
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10  lg:mx-24 mx-6">
        {featureInfo.map((f) => (
          <div
            key={f.id}
            className="font-semibold shadow-lg my-6 border-2 lg:w-[350px] p-8 h-[570px]  w-[340px] relative"
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
              <PrimaryButton text={f.btn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
