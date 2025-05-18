import React from "react";
import travis from "../../assets/Travis Pena 1.png"; // use the chef image you provided
import logo from "../../assets/Image_20250422_103510_144 1.png"; // use the chef logo you provided
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#d31313] text-white overflow-hidden">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row min-h-screen px-4 xl:px-0">

        

        {/* Hero Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-start justify-between xl:pl-10 pt-10 xl:pt-16 relative z-10">

          {/* Left Hero Text */}
          <div className="text-black xl:mt-20">
            <h2 className="text-xl font-normal mb-2">Traveling Chef</h2>
            <h1 className="text-[100px] xl:text-[120px] font-bold leading-[0.9]">
              Travis<br />Pena
            </h1>
          </div>

          {/* Chef Image */}
          <div className="mt-8 xl:mt-0">
            <img src={travis} alt="Chef Travis Pena" className="w-[400px] xl:w-[500px] object-contain" />
          </div>

          {/* Cuisine Box */}
          <div className="absolute top-10 right-10 bg-white text-black px-4 py-2 rounded shadow-md">
            <ul className="text-sm space-y-1 text-right">
              <li>American ⤴</li>
              <li>French</li>
              <li>Italian</li>
            </ul>
          </div>
        </div>
      </div>

      
    </section>
  );
}
