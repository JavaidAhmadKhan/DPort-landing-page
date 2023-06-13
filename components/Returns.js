import Image from "next/image";
import React from "react";

import Investment from "../public/Wallet.png";
import Duration from "../public/Icon-Backpack.png";
import ReturnsImg from "../public/Icon-Analytic.png";

const Returns = () => {
  return (
    <div>
      <h1 className="text-[#414141] font-semibold text-[24px] leading-[64px] text-center">
        Our returns
      </h1>
      <h2 className="text-[#414141] font-bold text-[48px] leading-[68px] text-center">
        How we make them
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 pt-12">
        <div className=" boxShadow bg-[#F2F2F2] py-12 px-12 rounded-md flex flex-col items-center">
          <Image src={Investment} alt="Investment" />
          <p className="pt-8 text-[#414141] leading-[28px] text-[14px] font-medium text-center ">
            #1
          </p>
          <h2 className="pt-12 text-[#0B1131] leading-[68px] text-[24px]  font-bold text-center ">
            Investment
          </h2>
          <p className=" pt-4 text-[#0B1131] leading-[28px] text-[14px] font-medium text-center opacity-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </div>
        <div className=" boxShadow bg-[#C8D8E4] py-12 px-12 rounded-md flex flex-col items-center">
          <Image src={Duration} alt="Investment" />
          <p className="pt-8 text-[#414141] leading-[28px] text-[14px] font-medium text-center ">
            #2
          </p>
          <h2 className="pt-12 text-[#0B1131] leading-[68px] text-[24px]  font-bold text-center ">
            Duration
          </h2>
          <p className=" pt-4 text-[#0B1131] leading-[28px] text-[14px] font-medium text-center opacity-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </div>
        <div className="boxShadow bg-[#093946] py-12 px-12 rounded-md flex flex-col items-center">
          <Image src={ReturnsImg} alt="Investment" />
          <p className="pt-8 text-white leading-[28px] text-[14px] font-medium text-center ">
            #3
          </p>
          <h2 className="pt-12 text-white leading-[68px] text-[24px]  font-bold text-center ">
            Returns
          </h2>
          <p className=" pt-4 text-white leading-[28px] text-[14px] font-medium text-center opacity-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Returns;
