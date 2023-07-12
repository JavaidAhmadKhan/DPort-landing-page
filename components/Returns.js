import Image from "next/image";
import React from "react";

import DATA from "../data";

const Returns = () => {
  return (
    <div>
      <h1 className="text-[#414141] font-semibold text-[24px]  text-center">
        Our returns
      </h1>
      <h2 className="text-[#414141] font-bold text-[28px] md:text-[36px] lg:text-[48px] text-center mt-4">
        How we make them
      </h2>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3  pt-12 pb-12 px-4 md:px-12 lg:px-16">
        {DATA.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center gap-3 md:gap-5 lg:gap-8 boxShadow py-8 px-8 bg-[#C8D8E4] rounded-md"
          >
            <Image src={data.image} alt={`${data.image}`} />
            <p className=" text-[#414141] leading-[28px] text-[14px] font-medium text-center ">
              {data.sno}
            </p>
            <h2 className=" text-[#0B1131] leading-[68px] text-[24px]  font-bold text-center ">
              {data.investment}
            </h2>
            <p className=" text-[#0B1131] leading-[28px] text-[14px] font-medium text-center opacity-50">
              {data.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Returns;
