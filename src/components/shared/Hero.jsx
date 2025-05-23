import React from "react";
import travis from "../../assets/Travis Pena 1.png";
import bg from "../../assets/Group 1000011749.png";
const Hero = () => {
  return (
    <section className="bg-[#C51212] w-full text-white h-[calc(100vh-190px)] flex items-center justify-center relative px-6 pt-12">
      <div className="absolute top-10 left-10 text-black max-w-[180px]">
        <p className="text-md leading-snug">Making people<br />happy by way of<br />food</p>
      </div>

      <div className="absolute top-10 right-10 text-black text-right">
        <button className="border border-black px-4 py-1 text-sm mb-2 hover:bg-black hover:text-white transition">
          American ↗
        </button>
        <p className="text-sm">French<br />Italian</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-x-20 py-20 absolute -bottom-20 md:-bottom-23.5 ">
        <div className="text-black">
          <img className="w-36 md:w-full" src={bg} alt="" />
        </div>

        <div className="relative">
          <img
            src={travis}
            alt="Chef Travis Pena"
            className="max-w-[200px] md:max-w-[400px] xl:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;