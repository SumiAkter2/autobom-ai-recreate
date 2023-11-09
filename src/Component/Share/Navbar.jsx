import { HiOutlineNewspaper } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
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
import { GoNote } from "react-icons/go";
import { Link } from "react-router-dom";
import { featureInfo } from "../Info/Info";

const Navbar = () => {
  const navItem = (
    <div className="lg:flex justify-between items-center relative">
      <div className="lg:flex justify-center items-center z-10 ">
        <Link to="/coming">
          <li>
            <div className="dropdown dropdown-hover z-50">
              <label
                tabIndex={0}
                className="flex m-1 hover:text-secondary text-white"
              >
                <span className="z-10"> Products</span>{" "}
                <IoIosArrowDown size="20px" className="mt-2 ml-2 " />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content hover:cursor-auto menu  shadow-lg bg-white lg:w-[700px]  top-10 border text-black p-8 z-50"
              >
                <div className="lg:flex justify-center items-center">
                  <div>
                    <h3 className="text-xl my-2">Our Platform</h3>
                    <p className="">Risk intelligence at your fingertips</p>
                    <button className="mt-3 text-skyblue-500 flex  items-center">
                      Learn More <MdArrowForwardIos className="ml-2" />
                    </button>
                  </div>
                  <div className="ml-4">
                    {featureInfo.map((f) => (
                      <div key={f.id}>
                        <div className="flex justify-start items-center gap-3">
                          <img className="w-6" src={f.img} alt="logo" />
                          <div>
                            <h3 className="text-xl my-1">{f.title}</h3>
                            <Link to="/coming" className="text-gray-600">
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
          </li>
        </Link>

        <Link to="/solutions">
          <li>
            <div className="dropdown dropdown-hover z-50">
              <label
                tabIndex={0}
                className="flex m-1 hover:text-secondary text-white"
              >
                <span className="z-1"> Sources</span>{" "}
                <IoIosArrowDown size="20px" className="mt-2 ml-2 " />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content hover:cursor-auto menu  shadow-lg bg-white w-[300px]  top-10 border text-black p-8 z-50"
              >
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
          </li>
        </Link>
        <Link to="/resources">
          <li>
            <div className="dropdown dropdown-hover z-50">
              <label
                tabIndex={0}
                className="flex m-1 hover:text-secondary text-white justify-center items-center"
              >
                Resources <IoIosArrowDown size="16px" className=" ml-2 " />
              </label>
              <div
                tabIndex={0}
                className="dropdown-content hover:cursor-auto menu  shadow-lg bg-white w-[300px]  top-10 border text-black p-8 z-50"
              >
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
          </li>
        </Link>
      </div>

      <div className=" lg:flex lg:absolute lg:-right-[600px] mt-6 lg:mt-0">
        <button className="text-xl px-8 border-0 text-white font-semibold mb-6 lg:mb-0">
          Login
        </button>
        <button className="button lg:w-fit w-[300px]"> Start Free Trial</button>
      </div>
    </div>
  );
  return (
    <div className="fixed w-full z-30">
      <div className="bg-[#269e16]">
        <p className="text-white text-center font-bold py-3 lg:text-lg px-4 lg:px-0 text-sm">
          FREE WEBINAR THIS THURSDAY! PFAS Restrictions in Electronics: What You
          Need to Know - Register Now, limited spaces left
        </p>
      </div>

      <div className="navbar bg-gradient-to-r from-[#001534] to-[#044876] font-bold lg:px-6 h-24  text-white ">
        <div className="navbar-start">
          {/* menu drawer */}
          <div className="drawer lg:hidden ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <HiMenuAlt1 size="30px" />
              </label>
            </div>
            <div className="drawer-side z-20 ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[350px] min-h-full bg-accent  text-xl">
                {/* Sidebar content here */}
                {navItem}
              </ul>
            </div>
          </div>
          <Link to="/" className=" font-bold text-xl ">
            AUTOBOM.ai
          </Link>
          <ul className="menu lg:menu-horizontal hidden px-1 ml-6 text-xl ">
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
