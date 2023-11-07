import "./Button.css";
const SecondaryButton = ({ text2 }) => {
  return (
    <button className="secondary-button lg:w-fit w-[300px]"> {text2}</button>
  );
};

export default SecondaryButton;
