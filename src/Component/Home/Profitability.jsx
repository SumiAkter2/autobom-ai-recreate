import PrimaryButton from "../Share/Button/PrimaryButton";

const Profitability = () => {
  return (
    <div className="lg:flex justify-center items-center gap-10 my-20 font-semibold">
      <div className="lg:w-[400px] text-center lg:text-start px-6 lg:px-0">
        <h1 className="lg:text-4xl text-3xl text-primary mb-6">
          Free Trial Includes:
        </h1>
        <p className="text-xl "> 1) 1x Free BOM run for any size project.</p>
        <p className="text-xl ">
          {" "}
          2)Full Report of Optimized components (cost savings and lead times).
        </p>
        <p className="text-xl "> 3) Free Training and consultation.</p>
      </div>
      <div className=" lg:h-96  px-6 py-8 ">
        <form className="grid gap-6 lg:text-start text-center">
          <h1 className="lg:text-4xl text-2xl text-primary  mb-4 ml-3">
            Start 14-Day Free Trial
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />

          <div className="flex lg:justify-start justify-center items-center ">
            <PrimaryButton text="Start Free Trial" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profitability;
