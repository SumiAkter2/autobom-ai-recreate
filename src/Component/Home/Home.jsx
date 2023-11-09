import Banner from "./Banner";
import Brand from "./Brand";
import Testimonial from "./Testimonial";
import "./Home.css";
import BridgeCountUp from "./BridgeCountUp";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <BridgeCountUp />
      <Testimonial />
    </div>
  );
};

export default Home;
