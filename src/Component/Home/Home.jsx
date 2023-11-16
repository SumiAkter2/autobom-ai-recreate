import Banner from "./Banner";
import Brand from "./Brand";
// import Testimonial from "./Testimonial";
import BridgeCountUp from "./BridgeCountUp";
import Feature from "./Feature";
import Profitability from "./Profitability";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <BridgeCountUp />
      <Feature />
      {/* <Testimonial /> */}
      <Profitability />
    </div>
  );
};

export default Home;
