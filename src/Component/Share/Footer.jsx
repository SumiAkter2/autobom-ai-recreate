import logo from "../../assets/logo.png";
import PrimaryButton from "./Button/PrimaryButton";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#075b8d] text-white p-8 lg:flex justify-between items-center text-center">
        <h1 className="text-4xl lg:ml-12">Get started with a free trial! </h1>
        <PrimaryButton text="Start Free Trial!" />
      </div>
      <footer className="footer p-10 bg-accent text-white lg:px-20">
        <nav>
          <header className="text-white text-xl font-semibold my-3">
            Products
          </header>
          <header className="link link-hover font-semibold text-[16px]  mt-2">
            Part Risk Manager
          </header>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Sub-Tier Intelligence
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Compliance Manager
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Supply Chain Watch
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            PCN Manager
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Supplier Insights
          </a>
        </nav>
        <nav>
          <header className="text-white text-xl font-semibold my-3">
            Solutions By Role
          </header>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Engineering
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Supply Chain
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Compliance
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Procurement
          </a>
        </nav>
        <nav>
          <header className="text-white text-xl font-semibold my-3">
            Solutions By Industry
          </header>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Consumer Electronics
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Aerospace & Defense
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Healthcare & Medical
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Devices
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Automotive
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Telecommunications
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Industrial
          </a>
        </nav>
        <nav>
          <header className="text-white text-xl font-semibold my-3">
            Resources
          </header>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Resource Hub
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Blog
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Content Hubs
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Newsletter
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Case Studies
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Guides
          </a>
        </nav>
        <nav>
          <header className="text-white text-xl font-semibold my-3">
            Company
          </header>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            About Us
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Contact Us
          </a>
          <a className="link link-hover font-semibold text-[16px]  mt-2">
            Linkedin
          </a>
        </nav>
      </footer>

      <footer className="footer px-10 py-4  bg-accent text-white border-t border-b border-gray-100">
        <nav>
          <h1 className="text-xl font-bold">AUTOBOM.AI</h1>
        </nav>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4  bg-accent text-white   ">
        <nav>
          <h1 className="">Privacy Policy</h1>
        </nav>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Copy &copy; All Rights Reserved By RYDE </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
