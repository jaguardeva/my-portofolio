import React from "react";
import Aboutme from "../components/About/Aboutme";
import MySkills from "../components/About/MySkills";

function About() {
  return (
    <div className="text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center px-4 md:py-24 pb-20 gap-10">
      <Aboutme />
      <MySkills />
    </div>
  );
}

export default About;
