import CountUp from "react-countup";
import { FaIndustry } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaMicrochip } from "react-icons/fa6";
const BridgeCountUp = () => {
  return (
    <div className="text-center font-semibold my-24 px-6">
      <h1 className="text-4xl  mt-6">
        The smartest way to optimize Bill of Materials.
      </h1>
      <p className=" text-xl my-4 lg:max-w-2xl mx-auto">
        AutoBOM.AI is your all-in-one solution for BOM optimization. It
        leverages AI to streamline component selection, reduce costs, and
        accelerate time-to-market.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 my-6  leading-10 lg:mx-24 mx-6">
        <div>
          <div className="text-accent lg:text-5xl text-3xl font-bold my-6 ">
            <CountUp delay={3} end={1} />
            Billion+
          </div>
          <p className="flex justify-center items-center">
            <FaMicrochip color="#001534" size="40px" />
          </p>
        </div>
        <div>
          <div className="text-accent lg:text-5xl text-3xl font-bold my-6">
            <CountUp delay={3} end={150} />K
          </div>
          <p className="flex justify-center items-center">
            <GiWorld color="#001534" size="40px" />
          </p>
        </div>
        <div>
          <div className="text-accent lg:text-5xl text-3xl font-bold my-6">
            <CountUp delay={3} end={50} />K
          </div>
          <p className="flex justify-center items-center">
            <FaIndustry color="#001534" size="40px" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BridgeCountUp;
