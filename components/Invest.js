import Image from "next/image";
import React from "react";

import People from "../public/people.png";
import Icon1 from "../public/Icon1.png";
import Icon2 from "../public/Icon2.png";
import Icon3 from "../public/Icon3.png";

const Invest = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 py-16 flex flex-col md:flex-row lg:flex-row gap-14">
      <div className="w-[100%] md:w-[50%] lg:w-[50%]">
        <h1 className="text-[#414141] leading-[36px] md:leading-[50px] lg:leading-[68px] text-[24px] font-semibold">
          3 step process:
        </h1>
        <h1 className="text-[#414141] leading-[36px] md:leading-[50px] lg:leading-[68px] text-[42px] md:text-[32px] lg:text-[48px] font-bold pt-6">
          Invest with us
        </h1>
        <p className="text-[#A0ABB8] leading-[28px] text-[14px] font-medium pt-6">
          It is as simple as making an FD. Simply select an amount to invest and
          then put it in a 30 day old vault. At the end of it earn 3% worth of
          interest and reinvest as per your desire.
        </p>
        <div className="flex items-center justify-center gap-4 pt-6">
          <Image src={Icon1} alt="icon1" />
          <p className="text-[#A0ABB8] leading-[28px] text-[14px] font-medium">
            It is as simple as making an FD. Simply select an amount to invest
            and then
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-6">
          <Image src={Icon2} alt="icon2" />
          <p className="text-[#A0ABB8] leading-[28px] text-[14px] font-medium">
            It is as simple as making an FD. Simply select an amount to invest
            and then
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-6">
          <Image src={Icon3} alt="icon3" />
          <p className="text-[#A0ABB8] leading-[28px] text-[14px] font-medium">
            It is as simple as making an FD. Simply select an amount to invest
            and then
          </p>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[50%]">
        <Image src={People} alt="people" />
      </div>
    </div>
  );
};

export default Invest;
