import img1 from "../../assets/dashboard/Flex_(company)-Logo.wine.png";
import img2 from "../../assets/dashboard/t.png";
import img3 from "../../assets/dashboard/gm.png";
import img4 from "../../assets/dashboard/ford.png";
const Brand = () => {
  return (
    <div className="shadow-lg">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-4  lg:max-w-2xl w-full  my-12 mx-auto gap-6 pb-6">
        <img className="lg:w-32 " src={img1} alt="brand image" />

        <img className="lg:w-20 w-16" src={img2} alt="brand image" />

        <img className="lg:w-20 w-16" src={img3} alt="brand image" />

        <img
          className="lg:h-20 lg:w-24 w-20 h-16 lg:pt-1"
          src={img4}
          alt="brand image"
        />
      </div>
    </div>
  );
};

export default Brand;
