import Banner from "./Banner";
// import Brand from "./Brand";
// import Testimonial from "./Testimonial";
import BridgeCountUp from "./BridgeCountUp";
import Feature from "./Feature";
import OurIndustry from "./OurIndustry";
import Profitability from "./Profitability";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Brand /> */}
      <BridgeCountUp />

      <Feature />
      <OurIndustry />
      {/* <Testimonial /> */}
      <Profitability />
    </div>
  );
};

export default Home;
