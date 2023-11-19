import PrimaryButton from "../Share/Button/PrimaryButton";
import SecondaryButton from "../Share/Button/SecondaryButton";
import img from "../../assets/dashboard/dashboard.png";

const Banner = () => {
  return (
    <div className="">
      <div className="hero lg:h-[720px] h-[900px] shadow-lg  lg:pt-16 pt-20 px-2 ">
        <div className="lg:hero-content lg:flex-row-reverse  ">
          <div className=" lg:text-start text-center  lg:absolute left-10 ">
            <div className=" text-black  font-sans">
              <h1 className="mb-6 lg:text-5xl text-3xl font-bold">
                Meet AUTOBOM Ai
              </h1>
              <p className="lg:max-w-md my-12 lg:text-xl font-semibold leading-9">
                Revolutionizing BOM Optimization with Ai power. Reducing cost,
                lead times and optimizing engineering.
              </p>
              <div className="mt-6  lg:flex lg:justify-start justify-center items-center">
                <a href="mailto:hariish@autobom.ai ">
                  <PrimaryButton text="Start free trial"> </PrimaryButton>
                </a>
                <SecondaryButton text2="Schedule a demo"> </SecondaryButton>
              </div>
            </div>
          </div>
          <div className="lg:absolute right-10  flex justify-center items-center mt-12 lg:mt-0 px-4">
            <img
              src={img}
              alt="img"
              className="lg:max-w-2xl shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
