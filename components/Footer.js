import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[rgb(200,216,228)] py-5 px-6 md:px-12 lg:px-20">
      <div className="flex gap-4 items-center justify-between">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Dport" className="cursor-pointer" />
          </Link>
        </div>
        <div>
          <p className="text-[12px] md:text-[14px] lg:text-[14px]">
            DPort is a team of highly talented professionals from all across the
            globe
          </p>
        </div>
      </div>
      <ul className="flex items-center justify-center gap-4 md:justify-center lg:justify-end  md:gap-4 lg:gap-6 font-semibold text-[14px] leading-[10px] md:leading-[18px] lg:leading-[21px] mt-3">
        <li>Home</li>
        <li>About Us</li>
        <li>Teams</li>
      </ul>
    </div>
  );
};

export default Footer;
