import React from "react";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

export default function MySkills() {
  return (
    <div>
      <section className="text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center ">
        <div className="bg-gray-900 rounded-3xl md:py-10 md:px-14 p-7">
          <div className="max-w-[1240px] mx-auto">
            <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
              My Skill
            </p>
            <h1 className="my-4">
              Some programming languages and frameworks that I mastered.
            </h1>
            <div>
              <div className="grid md:grid-cols-2">
                <div>
                  <h1 className="text-xl my-5">Programming Languages :</h1>
                  <BiLogoJavascript size={50} />
                </div>
                <div>
                  <h1 className="text-xl my-5">Framework :</h1>
                  <div className="flex flex-row gap-6">
                    <BiLogoReact size={50} />
                    <TbBrandNextjs size={50} />
                    <BiLogoTailwindCss size={50} />
                    <BiLogoNodejs size={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
