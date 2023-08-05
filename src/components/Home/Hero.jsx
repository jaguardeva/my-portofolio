import React from "react";
import Typed from "react-typed";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-white w-full">
      <section className="md:max-w-[1240px] overflow-hidden mt-[-96px] h-screen mx-auto text-left flex flex-col justify-center px-4 ">
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
        <button className="z-10">
          <Link
            to="/about"
            className="bg-[#00df9a] md:w-[200px] w-[180px] rounded-md font-medium  my-6  py-3 px-4 text-black text-[17px]  md:text-xl  flex text-center justify-center items-center hover:opacity-90"
          >
            About Me. <HiArrowSmRight size={35} className="ml-0" />
          </Link>
        </button>
      </section>
    </div>
  );
}
