/* eslint-disable react/no-unescaped-entities */
import Fotoku from "/Image/foto-me.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full" data-aos="fade-up">
      <section className=" text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-900 rounded-3xl md:py-5 md:px-14 p-7">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2">
              <img
                src={Fotoku}
                alt="/"
                className="mx-auto my-5"
                loading="lazy"
              />

              <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                  JAGUAR DEVA NANGGALASAKTI OKTAVIAN
                </p>
                <h1 className="my-4 text-sm  md:text-lg">
                  I am a 4th semester student of informatics
                  engineering/computer science at the Universitas Pembangunan
                  Nasional “Veteran” Jawa Timur with a GPA of 3.96/4.00. A web
                  development enthusiast, specializing in Front-End development,
                  I have a strong understanding of HTML, CSS, and JavaScript, as
                  well as experience using frameworks such as React.js and
                  Next.js. With a keen eye for detail and a passion for creating
                  intuitive user interfaces, I am dedicated to delivering
                  high-quality web solutions. I thrive in collaborative
                  environments and am always eager to learn and stay updated
                  with the latest technologies in the field of web development.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
