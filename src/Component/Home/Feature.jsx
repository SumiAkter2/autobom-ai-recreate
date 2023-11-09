import { featureInfo } from "../Info/Info";
import { MdOutlineDone } from "react-icons/md";
import PrimaryButton from "../Share/Button/PrimaryButton";
const Feature = () => {
  return (
    <div className="my-24">
      <div className="text-center my-12">
        <h1 className="text-4xl font-semibold">
          One Flexible, Integrated, and Collaborative Platform
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-10  lg:mx-24 mx-6">
        {featureInfo.map((f) => (
          <div
            key={f.id}
            className="font-semibold shadow-lg my-6 border-2 lg:w-[350px] p-8 lg:h-[570px] relative"
          >
            <img className="w-8 my-3" src={f.img} alt="Image" />
            <h1 className="text-2xl my-2"> {f.title}</h1>

            <p className=" mb-3">{f.para}</p>
            <div className="divider w-56"></div>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" /> {f.feature1}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature2}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature3}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature4}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature5}
            </p>
            <p className="flex justify-start items-center mt-2">
              <MdOutlineDone color="green" className="mr-2" />
              {f.feature6}
            </p>
            <div className="w-full lg:mx-8 mx-4 absolute bottom-5">
              <PrimaryButton text={f.btn} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
