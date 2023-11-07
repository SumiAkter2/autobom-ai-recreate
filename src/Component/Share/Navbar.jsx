import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li className="hover:text-white">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="flex m-1">
            Hover <IoIosArrowDown size='20px' className="mt-2 ml-2 "/>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  top-10"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>

      <li className="hover:text-white">
        <Link to="/" className="flex  items-center">
          Solution <IoIosArrowDown />
        </Link>
      </li>
      <li className="hover:text-white">
        <Link to="/">
          Resources <IoIosArrowDown />
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-[#269e16]">
        <p className="text-white text-center font-bold py-3 text-lg px-4 lg:px-0">
          FREE WEBINAR THIS THURSDAY! PFAS Restrictions in Electronics: What You
          Need to Know - Register Now, limited spaces left
        </p>
      </div>
      <div className="navbar bg-transparent fixed lg:top-10 top-20 font-bold lg:px-6 text-white py-8">
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
            <div className="drawer-side z-50 ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-slate-300 text-black ">
                {/* Sidebar content here */}
                {navItem}
              </ul>
              <div className=" lg:hidden flex absolute top-52 ml-4">
                <button className="btn bg-orange-500 border-0 text-white lg:btn-md btn-sm hover:text-black hover:bg-orange-300">
                  Login
                </button>

                <button className="btn bg-orange-500 border-0 text-white lg:btn-md btn-sm hover:text-black hover:bg-orange-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <Link to="/" className=" font-bold text-xl ">
            {/* <img src={logo} alt="logo" className="w-16" /> */}
            AUTOBOM.ai
          </Link>
          <ul className="menu lg:menu-horizontal  hidden px-1 text-xl ml-12 hover:text-white">
            {navItem}
          </ul>
        </div>

        {/* menu */}

        <div className="navbar-end  lg:flex hidden ">
          <button className="text-xl px-8 border-0 text-white font-semibold">
            Login
          </button>

          <button className="btn bg-orange-500 border-0 text-white lg:btn-md btn-sm hover:text-black hover:bg-orange-300 rounded-none">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
