import React from "react";

import Tag from "./Fragments/Tag";
import Button from "./Fragments/Button";

function Card() {
  return (
    <div className="w-full">
      <section className="max-w-[1240px] h-[calc(100vh-96px)] mx-auto text-left flex flex-col justify-center p-4 text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="bg-gray-900 rounded-2xl overflow-hidden mb-10">
              <img src="/Image/img-ayongopi.png" alt="" className="w-full" />
              <div className="p-8">
                <h1 className="font-bold text-[20px] sm:text-2xl md:text-3xl lg:text-[30xl] uppercase text-white">
                  ayo<span className="text-[#EAC696] italic">ngopi.</span>
                </h1>
                <p className="text-base text-body-color leading-relaxed mb-5">
                  It is a coffee shop business website
                </p>
                <div className="flex flex-wrap gap-1">
                  <Tag name="react" link="https://react.dev/" />
                  <Tag name="tailwindcss" link="https://tailwindcss.com/" />
                </div>
                <Button
                  name="See Project"
                  link="https://ayongopi.netlify.app/"
                />
              </div>
            </div>
            <h1 className="AyoNgopi"></h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
