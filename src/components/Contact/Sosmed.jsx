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
      <section className="text-white max-w-[1240px] mx-auto  px-4 py-8 lg:py-24 flex flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="w-full font-bold text-3xl text-[#00df9a]">Here Me</h1>
          <p className="py-4 md:text-2xl text-md font-normal">
            Feel free to contact me any time, through any method below.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 place-items-center md:place-items-start gap-10">
            <a
              href="https://www.facebook.com/deva.jaguar.5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a]  ease-in-out duration-150"
            >
              <FaFacebookSquare size={120} />
            </a>
            <a
              href="https://www.instagram.com/jaguardeva_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a]  ease-in-out duration-150 "
            >
              <FaInstagramSquare size={120} />
            </a>
            <a
              href="https://twitter.com/JaguarDeva"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a]  ease-in-out duration-150 "
            >
              <FaTwitterSquare size={120} />
            </a>
            <a
              href=" https://wa.me/6285755682770?text=Hai,%20ayo%20ngopi%20mas%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a]  ease-in-out duration-150"
            >
              <FaWhatsappSquare size={120} />
            </a>
            <a
              href="https://github.com/jaguardeva"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a]  ease-in-out duration-150 "
            >
              <FaGithubSquare size={120} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sosmed;
