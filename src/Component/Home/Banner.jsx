const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#001534] to-[#044876] lg:h-[550px] px-24 text-white pt-36 font-sans">
      <div className="lg:w-[600px] ">
        <h1 className="lg:text-5xl text-3xl font-bold pb-4 leading-6 ">
          One Platform to Manage Supply Chain Risk
        </h1>
        <p className="py-6 text-xl">
          Build resilience in <span className="underline">engineering</span>,{" "}
          <span className="underline">compliance </span>, &
          <span className="underline">procurement</span> powered by the world's
          most comprehensive supply chain and component data.
        </p>

        <div className="my-6">
          <button className="font-sans"> Start free trial</button>
          <button> Schedule a demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
