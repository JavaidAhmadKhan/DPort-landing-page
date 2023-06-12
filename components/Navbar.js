import React from "react";
import Logo from "../public/Logo.png";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[rgb(200,216,228)] px-0 md:px-12 lg:px-20 sticky top-0 left-0 right-0 z-10 ">
      <div className="flex items-center justify-between p-6">
        <Image src={Logo} alt="Dport" className="cursor-pointer" />
        <ul className="flex items-center justify-between gap-2 md:gap-4 lg:gap-6 font-semibold text-[10px] md:text-[14px] lg:text-[14px] leading-[10px] md:leading-[18px] lg:leading-[21px]">
          <li>Home</li>
          <li>About Us</li>
          <li>Teams</li>
          <Button title="Get early access" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
