import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[rgb(200,216,228)] px-0 md:px-12 lg:px-20 ">
      <div className="flex items-center justify-between p-6">
        <Link href="/">
          <Image src={Logo} alt="Dport" className="cursor-pointer" />
          <p>
            DPort is a team of highly talented professionals from all across the
            globe
          </p>
        </Link>
        <ul className="flex items-center justify-between gap-2 md:gap-4 lg:gap-6 font-semibold text-[10px] md:text-[14px] lg:text-[14px] leading-[10px] md:leading-[18px] lg:leading-[21px]">
          <li>Home</li>
          <li>About Us</li>
          <li>Teams</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
