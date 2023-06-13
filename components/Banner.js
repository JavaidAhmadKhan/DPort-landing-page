import React from "react";
import Image from "next/image";

import Button from "./Button";
import BannerImg from "../public/banner.png";
import CoinLeft from "../public/coinLeft.png";
import CoinRight from "../public/coinRight.png";

const Banner = () => {
  return (
    <div className="bg-[#C8D8E4] px-4 md:px-16 lg:px-24 pt-12 pb-20">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-[100%] md:w-[50%] lg:w-[60%]">
          <p className=" font-bold text-[74px] md:text-[84px] lg:text-[94px] text-[#414141] leading-[80px] md:leading-[100px] lg:leading-[120px] ">
            DPort <br /> Finance
          </p>
          <p className="font-normal text-[14px] leading-[28px] text-[#414141] pt-6 text-justify">
            Far far away, behind the word mountains, far from the countries
            Vokalia <br /> and Consonantia, there live the blind texts.
            Separated they live in <br /> Bookmarksgrove right at the coast of
            the Semantics
          </p>
          <div className="pt-8 flex justify-center md:justify-start lg:justify-start pb-8">
            <Button title="Get early access" />
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[40%] relative">
          <Image src={BannerImg} alt="banner" />
        </div>
        <div className="absolute left-[1050px] top-24">
          <Image src={CoinRight} alt="coinright" />
        </div>
        <div className="absolute left-[650px] top-[350px] ">
          <Image src={CoinLeft} alt="coinleft" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
