import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import NextIcon from "/Image/next-icon.svg";

export default function MySkills() {
  return (
    <div>
      <section className="text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center ">
        <div className="bg-gray-900 rounded-3xl md:py-10 md:px-14 p-7">
          <div className="max-w-[1240px] mx-auto">
            <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
              My Skill
            </p>
            <h1 className="my-4 text-md md:text-xl">
              Some programming languages and frameworks that I mastered.
            </h1>
            <div>
              <div className="grid md:grid-cols-2">
                <div>
                  <h1 className="text-md md:text-xl my-5">
                    Programming Languages :
                  </h1>
                  <div className="h-10 flex  items-center overflow-hidden">
                    <BiLogoJavascript size={50} />
                  </div>
                </div>
                <div>
                  <h1 className="text-md md:text-xl my-5">Framework :</h1>
                  <div className="flex h-10 flex-row gap-6 items-center overflow-hidden">
                    <BiLogoReact size={50} />
                    <img src={NextIcon} alt="Next-icon" className="h-20" />
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
