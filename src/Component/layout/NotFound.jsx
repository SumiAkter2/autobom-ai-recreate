import { Link } from "react-router-dom";
import notFoundImg from "../../assets/footer/giphy.gif";
import PrimaryButton from "../Share/Button/PrimaryButton";

const NotFound = () => {
  return (
    <div>
      <div className="lg:pt-48 pt-64 flex justify-center items-center ">
        <img src={notFoundImg} alt="coming-soon-gif" />
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

export default NotFound;
