"use client";

import React from "react";
import Logo from "../public/Logo.png";
import Image from "next/image";
import Button from "./Button";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-[rgb(200,216,228)] px-0 md:px-12 lg:px-20 sticky top-0 left-0 right-0 z-10"
    >
      {({ open }) => (
        <>
          <div className="relative p-6 flex items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mx-4">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="ml-auto md:ml-0 lg:ml-0">
                <Link href={"/"}>
                  <Image className="object-contain" src={Logo} alt="DPort" />
                </Link>
              </div>
              <div className="flex flex-shrink-0 items-center justify-center md:ml-auto lg:ml-auto" />
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-[#414141]" : "text-[#414141]",
                        "rounded-md px-3 py-2  font-semibold text-[10px] md:text-[14px] lg:text-[14px] leading-[10px] md:leading-[18px] lg:leading-[21px]"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button title="Get early access" />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "" : "text-[#414141]",
                    "block rounded-md px-3 py-2  font-semibold text-[10px] md:text-[14px] lg:text-[14px] leading-[10px] md:leading-[18px] lg:leading-[21px]"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="flex items-start mx-4 pb-4">
              <Button title="Get early access" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
