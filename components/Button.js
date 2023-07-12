import React from "react";

const Button = (props) => {
  return (
    <div className="flex items-center justify-center">
      <button className="flex  items-center  justify-center p-[10px] border-[#21372A] border-2 rounded bg-[#414141] text-white">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
