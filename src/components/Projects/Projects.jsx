import React from "react";
import { TbError404 } from "react-icons/tb";

function Projects() {
  return (
    <div className="w-full">
      <section className="max-w-[1240px] mt-[-96px] h-screen mx-auto text-left flex flex-col justify-center items-center px-4 text-white">
        <div className="text-center font-bold text-5xl w-full flex flex-col items-center">
          <TbError404 className="text-[200px]" />
          <h1>Not Found</h1>
        </div>
      </section>
    </div>
  );
}

export default Projects;
