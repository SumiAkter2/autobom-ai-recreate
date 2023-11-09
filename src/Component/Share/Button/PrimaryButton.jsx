import "./Button.css";
const PrimaryButton = ({ text }) => {
  return <button className="button lg:w-fit w-[300px]"> {text}</button>;
};

export default PrimaryButton;
