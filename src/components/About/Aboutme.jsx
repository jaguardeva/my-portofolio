/* eslint-disable react/no-unescaped-entities */
import Fotoku from "/Image/foto-me.png";

export default function Aboutme() {
  return (
    <div className="w-full">
      <section className=" text-white max-w-[1240px]  mx-auto text-left flex flex-col justify-center">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-900 rounded-3xl md:py-5 md:px-14 p-7">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img src={Fotoku} alt="/" className="mx-auto my-5" />

              <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                  JAGUAR DEVA NANGGALASAKTI OKTAVIAN
                </p>
                <h1 className="my-4 text-md md:text-xl">
                  I am An Informatics Student At Universitas Pembangunan
                  Nasional "Veteran" Jawa Timur
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
