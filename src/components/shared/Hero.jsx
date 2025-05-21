import React from "react";
import travis from "../../assets/Travis Pena 1.png";

const Hero = () => {
  return (
    <section className="bg-[#C51212] text-white min-h-screen flex items-center justify-center relative px-6 pt-12">
      <div className="absolute top-10 left-10 text-black max-w-[180px]">
        <p className="text-md leading-snug">Making people<br />happy by way of<br />food</p>
      </div>

      <div className="absolute top-10 right-10 text-black text-right">
        <button className="border border-black px-4 py-1 text-sm mb-2 hover:bg-black hover:text-white transition">
          American ↗
        </button>
        <p className="text-sm">French<br />Italian</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="text-black">
          <p className="text-lg">Travelling Chef</p>
          <h1 className="text-[80px] leading-none font-bold">Travis</h1>
          <h1 className="text-[80px] leading-none font-bold">Pena</h1>
        </div>

        <div className="relative">
          <img
            src={travis}
            alt="Chef Travis Pena"
            className="max-w-[300px] md:max-w-[400px] xl:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;