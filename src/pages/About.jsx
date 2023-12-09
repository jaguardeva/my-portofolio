import Aboutme from "../components/About/Aboutme";
import MySkills from "../components/About/MySkills";
import Navbar from "../components/Navbar";

function About() {
  return (
    <Navbar>
      <div className="text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center px-4 md:py-24 pb-20 gap-10">
        <Aboutme />
        <MySkills />
      </div>
    </Navbar>
  );
}

export default About;
