import CountUp from "react-countup";
const BridgeCountUp = () => {
  return (
    <div className="text-center font-semibold my-24">
      <h1 className="text-4xl  mt-6">Bridge the Information Divide</h1>
      <p className=" text-xl my-4">
        Access to the world&apos;s most comprehensive electronic supply chain
        data
      </p>
      <div className="grid lg:grid-cols-3 gap-4 my-6  leading-10 lg:mx-24 mx-6">
        <div>
          <div className="text-[#075b8d] lg:text-5xl text-3xl font-bold my-6">
            <CountUp delay={3} end={1} />
            Billion+
          </div>
          <p>Electronic Components</p>
        </div>
        <div>
          <div className="text-[#075b8d] lg:text-5xl text-3xl font-bold my-6">
            <CountUp delay={3} end={150000} />+
          </div>
          <p>Worldwide Suppliers</p>
        </div>
        <div>
          <div className="text-[#075b8d] lg:text-5xl text-3xl font-bold my-6">
            <CountUp delay={3} end={50000} />+
          </div>
          <p>Manufacturing Sites</p>
        </div>
      </div>
    </div>
  );
};

export default BridgeCountUp;
