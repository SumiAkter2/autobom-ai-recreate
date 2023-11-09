import { Link } from "react-router-dom";
import comingImg from "../../assets/footer/coming soon.gif";
import PrimaryButton from "../Share/Button/PrimaryButton";
const ComingSoon = () => {
  return (
    <div>
      <div className="lg:pt-48 pt-64 flex justify-center items-center ">
        <img src={comingImg} alt="coming-soon-gif" />
      </div>
      <div className=" flex justify-center items-center pb-12">
        <Link to="/">
          {" "}
          <PrimaryButton text="Go Home" />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
