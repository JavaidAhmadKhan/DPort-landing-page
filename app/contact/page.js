"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7nekqqq",
        "template_t9h8gfg",
        form.current,
        "BuGNRiH9FGf_rCHj0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-col lg:flex-row">
        <form
          className="shadow-lg border rounded w-full p-0 md:p-3 lg:p-6 m-0 md:m-3 lg:m-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex items-center gap-8 m-3">
            <input
              className="bg-gray-200 p-3 rounded w-full outline-none"
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex items-center gap-8 m-3 ">
            <input
              className="bg-gray-200 p-3 rounded w-full outline-none"
              type="email"
              name="user_email"
              required
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex items-center gap-8 m-3 ">
            <textarea
              className="bg-gray-200 p-8 rounded w-full outline-none"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center justify-center mb-3">
            <input
              type="submit"
              value="Send"
              className="cursor-pointer bg-slate-600 py-3 px-6 rounded text-white text-md font-bold"
              required
            />
          </div>
        </form>
        <div className="flex w-full items-center justify-center px-6 py-6">
          <Image
            className="w-auto h-auto object-contain"
            src={require("../../public/contact.jpg")}
            alt="contact"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
