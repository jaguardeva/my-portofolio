import React from "react";
import Fotoku from "/public/Image/foto-me.png";

export default function Aboutme() {
  return (
    <div className="w-full">
      <section className=" text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center px-4 md:py-24 pb-20 gap-6">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-900 rounded-3xl md:py-5 md:px-14 p-7">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img src={Fotoku} alt="/" className="mx-auto my-5" />

              <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                  JAGUAR DEVA NANGGALASAKTI OKTAVIAN
                </p>
                <h1 className="my-4">
                  I am An Informatics Student At Universitas Pembangunan
                  Nasional "Veteran" Jawa Timur
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl md:py-5 md:px-14 p-7">
            <div className="max-w-[1240px] mx-auto">
              <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                My Skill
              </p>
              <h1 className="my-4">
                Some programming languages and frameworks that I mastered:
              </h1>
              <div>
                <div className="grid md:grid-cols-2">
                  <div>
                    <h1 className="text-xl my-5">Programming Languages :</h1>
                    <div className=" w-10 md:w-20">
                      <img src="/public/icon/javascript-icon.svg" alt="/" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl my-5">Framework :</h1>
                    <div className=" w-10 md:w-20 flex flex-row gap-6">
                      <img src="/public/icon/next-icon.svg" alt="/" />
                      <img src="/public/icon/react-icon.svg" alt="/" />
                      <img src="/public/icon/vite-icon.svg" alt="/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden lg:block absolute top-[300px] right-40  z-[1]">
          <img
            className=" w-20 opacity-10"
            src="/public/icon/react-icon.svg"
            alt="/"
          />
        </div>
        <div className="hidden lg:block absolute top-[420px] right-52  z-[1] rotate-45">
          <img
            className=" w-40 opacity-10"
            src="/public/icon/javascript-icon.svg"
            alt="/"
          />
        </div>
        <div className="hidden lg:block absolute top-[200px] right-64 -rotate-45  z-[1]">
          <img
            className=" w-24 opacity-10"
            src="/public/icon/tailwind-icon.svg"
            alt="/"
          />
        </div>
        <div className="hidden lg:block absolute top-[200px] right-10 -rotate-45  z-[1]">
          <img
            className=" w-24 opacity-10"
            src="/public/icon/bootstrap-icon.svg"
            alt="/"
          />
        </div>
        <div className="hidden lg:block absolute top-[200px] -left-1 rotate-12  z-[1]">
          <img
            className=" w-52 opacity-10"
            src="/public/icon/next-icon.svg"
            alt="/"
          />
        </div>
        <div className="hidden lg:block absolute bottom-36 left-36 rotate-12  z-[1]">
          <img
            className=" w-20 opacity-10"
            src="/public/icon/vite-icon.svg"
            alt="/"
          />
        </div>
      </section>
    </div>
  );
}
