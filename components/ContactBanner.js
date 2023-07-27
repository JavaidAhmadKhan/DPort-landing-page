import React from "react";
import Button from "./Button";

const ContatBanner = (buttonType) => {
  return (
    <div className="bg-[#093946] py-28">
      <h2 className="text-center text-[#D2D5E3] text-[24px] font-semibold leading-[68px] font-Poppins">
        Connect with us
      </h2>
      <h2 className="text-center text-[#FFF] text-[48px] font-bold leading-[68px]">
        Interested? <br /> Let’s start an investment together
      </h2>
      <div className="mt-8">
        <Button title="Contact us" buttonType="contact" />
      </div>
    </div>
  );
};

export default ContatBanner;
