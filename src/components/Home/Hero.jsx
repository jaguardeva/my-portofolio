/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-white w-full bg-gradient-to-r from-[#000300] to-[#0c4b37]">
      <section className="md:max-w-[1240px] overflow-hidden mt-[-96px] h-screen mx-auto text-left flex flex-col justify-center px-4 ">
        <p className="text-[#00df9a] font-bold py-2 text-xl md:text-2xl">
          Hello, It's Me
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Jaguar Deva Nanggalasakti Oktavian
        </h1>
        <div className="flex items-center text-left">
          <p className="md:text-3xl  text-xl font-bold  text-white py-2">
            I'am a
            <span className="text-[#00df9a]"> Front-End Web Developer</span>
          </p>
        </div>

        <Link
          to="/about"
          className="bg-[#00df9a] md:w-[200px] w-[150px] rounded-md font-medium  my-6  py-3 px-4 text-black text-[17px]  md:text-xl  flex text-center justify-center items-center hover:bg-transparent ease-in-out duration-100 hover:outline outline-[#00df9a] hover:text-[#00df9a] "
        >
          About Me
        </Link>
      </section>
    </div>
  );
}
