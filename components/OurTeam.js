import React from "react";

import Button from "./Button";

const OurTeam = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 py-16 flex flex-col md:flex-row lg:flex-row gap-14">
      <div className="w-[100%] md:w-[50%] lg:w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="gridContainer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <h2 className="titleHeading">
              Javaid Khan <br />
              <span className="titleSubHeading">Founder</span>
            </h2>
          </div>

          <div className="gridContainer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <h2 className="titleHeading">
              Aqib Javaid <br />
              <span className="titleSubHeading">Co-Founder</span>
            </h2>
          </div>

          <div className="gridContainer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <h2 className="titleHeading">
              Javaid Khan <br />
              <span className="titleSubHeading">CTO</span>
            </h2>
          </div>

          <div className="gridContainer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <h2 className="titleHeading">
              Peter Zeal <br />
              <span className="titleSubHeading">Marketting Head</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[40%]">
        <h1 className="text-[#414141] leading-[36px] md:leading-[50px] lg:leading-[68px] text-[24px] font-semibold pt-6">
          Our team
        </h1>
        <h2 className="text-[#414141] leading-[68px] text-[48px] font-bold pt-6">
          Meet the mega minds behind this
        </h2>
        <div className="flex items-center justify-center gap-4 pt-6">
          <p className="text-[#A0ABB8] leading-[28px] text-[14px] font-medium">
            It is as simple as making an FD. Simply select an amount to invest
            and then put it in a 30 day old vault. At the end of it earn 3%
            worth of interest and reinvest as per your desire.
          </p>
        </div>
        <div className="flex items-center justify-start gap-3 mt-6 ">
          <Button title="Check out the fam" buttonType="team" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
