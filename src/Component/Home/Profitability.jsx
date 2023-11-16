import { useRef } from "react";
import PrimaryButton from "../Share/Button/PrimaryButton";
import emailjs from "emailjs-com";

const Profitability = () => {
  const form = useRef();

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gks1fg",
        "template_mq0hs6o",
        form.current,
        "zaDkgqaW77bTY4aEn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // console.log({ name: name1, email: email1, phone: phone1 });
    // const emailUseName = name1;
    // const emailBody = `Hi ,My name is ${name1}. I want to start free trial now.,My phone number is ${phone1} and email is ${email1}`;

    // const mailtoLink = `mailto:sumiakter6335@gmail.com?subject=${encodeURIComponent(
    //   emailUseName
    // )}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    // window.location.href = mailtoLink;
  };
  return (
    <div className="lg:flex justify-center items-center gap-10 my-20 font-semibold">
      <div className="lg:w-[400px] text-center lg:text-start px-6 lg:px-0">
        <h1 className="lg:text-4xl text-3xl text-primary mb-6">
          Free Trial Includes:
        </h1>
        <p className="text-xl my-4">
          {" "}
          1. 1x Free BOM run for any size project.
        </p>
        <p className="text-xl my-4">
          {" "}
          2.Full Report of Optimized components (cost savings and lead times).
        </p>
        <p className="text-xl my-4"> 3. Free Training and consultation.</p>
      </div>
      <div className=" lg:h-96  px-6 py-8 ">
        <form
          ref={form}
          className="grid gap-6 lg:text-start text-center"
          onSubmit={submitEmail}
        >
          <h1 className="lg:text-4xl text-2xl text-primary  mb-4 ml-3">
            Start 14-Day Free Trial
          </h1>
          <input
            required
            type="text"
            placeholder="Name"
            name="user_name"
            id="name"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />
          <input
            required
            type="text"
            placeholder="Email"
            name="user_email"
            id="email"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />
          <input
            required
            type="text"
            placeholder="Phone Number"
            name="user_phone"
            id="phone"
            className="input input-bordered ml-3 rounded-none max-w-sm"
          />

          <div className="flex lg:justify-start justify-center items-center ">
            <button type="submit">
              <PrimaryButton text="Start Free Trial" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profitability;
