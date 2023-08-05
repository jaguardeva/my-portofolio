import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function Sosmed() {
  return (
    <div className="w-full">
      <section className="text-white max-w-[1240px] h-screen mt-[-96px] mx-auto  px-4 flex flex-col justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="w-full font-bold text-3xl text-[#00df9a]">Here Me</h1>
          <p className="py-4 md:text-2xl text-xl">
            Feel free to to contact me any time, through any method below.
          </p>
          <div className="flex">
            <a
              href="https://www.facebook.com/deva.jaguar.5"
              target="_blank"
              className="hover:text-[#00df9a] hover:scale-150 ease-in-out duration-150"
            >
              <FaFacebookSquare size={40} />
            </a>
            <a
              href="https://www.instagram.com/jaguardeva_/"
              target="_blank"
              className="hover:text-[#00df9a] hover:scale-150 ease-in-out duration-150 ml-5 md:ml-11"
            >
              <FaInstagramSquare size={40} />
            </a>
            <a
              href="https://twitter.com/JaguarDeva"
              target="_blank"
              className="hover:text-[#00df9a] hover:scale-150 ease-in-out duration-150 ml-5 md:ml-11"
            >
              <FaTwitterSquare size={40} />
            </a>
            <a
              href=" https://wa.me/6285755682770?text=Hai,%20ayo%20ngopi%20mas%20!"
              target="_blank"
              className="hover:text-[#00df9a] hover:scale-150 ease-in-out duration-150 ml-5 md:ml-11"
            >
              <FaWhatsappSquare size={40} />
            </a>
            <a
              href="https://github.com/jaguardeva"
              target="_blank"
              className="hover:text-[#00df9a] hover:scale-150 ease-in-out duration-150 ml-5 md:ml-11"
            >
              <FaGithubSquare size={40} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sosmed;
