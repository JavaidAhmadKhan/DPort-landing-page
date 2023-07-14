import React from "react";

const BUTTON_TYPE_CLASSES = {
  contact: "contactus",
  team: "team",
};
const Button = (props) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className={` font-semibold text-[14px] button-container ${
          BUTTON_TYPE_CLASSES[props.buttonType]
        }`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
