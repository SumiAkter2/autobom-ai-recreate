import { Link } from "react-router-dom";
import "./NavAccordion.css";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiRadioTower } from "react-icons/gi";
import { GiCargoCrane } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { BiFirstAid } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDeviceHub } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { featureInfo } from "../Info/Info";

function NavAccordion() {
  return (
    <div>
      <div className="accordion lg:hidden">
        <section className="accordion-item">
          <Link to="/coming">
            <label className="flex m-1 justify-between text-black">
              <span className="z-10"> Products</span>
              <IoIosArrowDown size="20px" className="mt-2 ml-2 " />
            </label>
          </Link>
          <div className="accordion-item-content">
            <div className=" hover:cursor-auto   shadow-lg border text-black p-8 z-50">
              <div className="lg:flex justify-center items-center ">
                <div className="text-[16px]">
                  <h3 className=" my-2">Our Platform</h3>
                  <p className="">Risk intelligence at your fingertips</p>
                  <button className="mt-3 text-skyblue-500 flex  items-center text-sm text-gray-500">
                    Learn More <MdArrowForwardIos className="ml-2" />
                  </button>
                </div>
                <div className="ml-4">
                  {featureInfo.map((f) => (
                    <div key={f.id}>
                      <div className="flex justify-start items-start gap-3 mt-6">
                        <img className="w-6" src={f.img} alt="logo" />
                        <div>
                          <h3 className="text-sm my-1">{f.title}</h3>
                          <Link to="/coming" className="text-gray-600 text-xs">
                            {f.btn}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="accordion-item">
          <Link to="/coming">
            <label className="flex justify-between m-1 text-black">
              <span className="z-1"> Sources</span>{" "}
              <IoIosArrowDown size="20px" className="mt-2 ml-2 " />
            </label>
          </Link>
          <div className="accordion-item-content">
            <div className=" hover:cursor-auto  shadow-lg bg-white  border text-black p-8 z-50 text-[16px]">
              <div className="ml-4">
                <h1 className="text-xl my-2">By Industry </h1>
                <p className="flex justify-start items-center my-4">
                  <RiComputerLine
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Consumer Electronics
                </p>
                <p className="flex justify-start items-center my-4">
                  <BsAirplaneEngines
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Aerospace & Defense
                </p>
                <p className="flex justify-start items-center my-4">
                  <BiSolidCarMechanic
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Automotive
                </p>
                <p className="flex justify-start items-center my-4">
                  <GiRadioTower
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Telecommunications
                </p>
                <p className="flex justify-start items-center my-4">
                  <BiFirstAid
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Healthcare & Medical Devices
                </p>
                <p className="flex justify-start items-center my-4">
                  <GiCargoCrane
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Industrial
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="accordion-item ">
          <Link to="/coming">
            <label className="flex justify-between m-1 text-black  items-center">
              Resources <IoIosArrowDown size="20px" className="mt-2 ml-2 " />
            </label>
          </Link>
          <div className="accordion-item-content">
            <div className=" hover:cursor-auto  shadow-lg bg-white  border text-black p-8 z-50 text-[16px]">
              <div className="ml-4">
                <p className="flex justify-start items-center my-4">
                  <HiOutlineNewspaper
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Blog
                </p>
                <p className="flex justify-start items-center my-4">
                  <MdOutlineDeviceHub
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Content Hubs
                </p>
                <p className="flex justify-start items-center my-4">
                  <SlEnvolopeLetter
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Newsletter
                </p>
                <p className="flex justify-start items-center my-4">
                  <BiSpreadsheet
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Case Studies
                </p>
                <p className="flex justify-start items-center my-4">
                  <GoNote
                    color="skyblue"
                    size="25px"
                    className="mr-2 font-thin"
                  />
                  Guides
                </p>
                <p className="text-xl mt-4">Resource Hub </p>
                <button className="mt-3 text-skyblue-500 flex  items-center">
                  View All Resources <MdArrowForwardIos className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <button className="text-xl px-8 border-0 text-black font-semibold my-6 lg:mb-0">
        Login
      </button>
      <button className="button lg:w-fit w-[300px]"> Start Free Trial</button>
    </div>
  );
}

export default NavAccordion;
