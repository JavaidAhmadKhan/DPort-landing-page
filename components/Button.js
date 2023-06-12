import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="border-[#21372A] border-2 p-3 rounded bg-[#414141] text-white">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
