import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import Logo from "../public/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row items-start justify-between px-6 lg:px-[125px] mt-24">
        <div className="flex items-center gap-2 mb-[24px]">
          <Link href="/">
            <Image src={Logo} alt="Dport" className="cursor-pointer" />
          </Link>
          <p className="text-[22px] text-[#414141] font-bold">DPort</p>
        </div>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-3 text-[#414141] font-Poppins text-[14px] font-semibold leading-['normal']">
            <li>Home</li>
            <li>Our Services</li>
            <li>Our Team</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>How it Works</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-1 items-center justify-between gap-6 mt-[24px]">
            <li>
              <BsFacebook size={26} color="#4267B2" />
            </li>
            <li>
              <BsInstagram size={26} color="#E1306C" />
            </li>
            <li>
              <BsTwitter size={26} color="#1DA1F2" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 lg:px-[125px] mb-[24px] mt-[24px] ">
        <p className="footerlast">©2021 DPort</p>
        <ul className="flex items-center justify-center  gap-8 footerlast">
          <li>Help</li>
          <li>Term & Conditions</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
