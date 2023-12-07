import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="text-white max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full font-bold text-3xl text-[#00df9a]">DEVA.</h1>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            doloremque asperiores magnam! Harum natus aliquid ad veritatis
            pariatur aperiam error.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagramSquare size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
            <FaDribbbleSquare size={30} className="cursor-pointer" />
            <FaGithubSquare size={30} className="cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
