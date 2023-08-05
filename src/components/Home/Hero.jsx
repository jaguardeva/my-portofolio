import React from "react";
import Typed from "react-typed";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-white">
      <section className="max-w-[1240px] mt-[-96px] h-screen mx-auto text-left flex flex-col justify-center px-4 ">
        <p className="text-[#00df9a] font-bold py-2 text-xl md:text-2xl">
          Hello, It's Me
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Jaguar Deva Nanggalasakti Oktavian
        </h1>
        <div className="flex items-center text-left">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold  text-white z-[-1] py-2">
            I'am a
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-0 pl-2 text-[#00df9a] z-[-1] py-2 md:ml-3 ml-0"
            strings={["Web Developer"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <button className="z-50">
          <Link
            to="/about"
            className="bg-[#00df9a] md:w-[200px] w-[180px] rounded-md font-medium  my-6  py-3 px-4 text-black text-[17px]  md:text-xl  flex text-center justify-center items-center hover:opacity-90"
          >
            About Me. <HiArrowSmRight size={35} className="ml-0" />
          </Link>
        </button>
        <div>
          <div className="absolute bottom-10 md:top-[300px] -right-[200px] md:right-40">
            <img
              className="w-50 md:w-20 opacity-5 md:opacity-10"
              src="/public/icon/react-icon.svg"
              alt="/"
            />
          </div>
          <div className="hidden md:block absolute top-[420px] right-52   rotate-45">
            <img
              className="w-20 md:w-40 opacity-5 md:opacity-10 z-[1]"
              src="/public/icon/javascript-icon.svg"
              alt="/"
            />
          </div>
          <div className="hidden md:block absolute top-[200px] right-64 -rotate-45  z-[1]">
            <img
              className="w-12 md:w-24 opacity-10"
              src="/public/icon/tailwind-icon.svg"
              alt="/"
            />
          </div>
          <div className="hidden md:block absolute top-[200px] right-10 -rotate-45  z-[1]">
            <img
              className="w-12 md:w-24 opacity-10"
              src="/public/icon/bootstrap-icon.svg"
              alt="/"
            />
          </div>
          <div className="hidden md:block absolute top-[200px] -left-1 rotate-12  z-[1]">
            <img
              className="w-20 md:w-52 opacity-20"
              src="/public/icon/next-icon.svg"
              alt="/"
            />
          </div>
          <div className="hidden md:block absolute bottom-36 left-36 rotate-12  z-[1]">
            <img
              className="w-10 md:w-20 opacity-10"
              src="/public/icon/vite-icon.svg"
              alt="/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
