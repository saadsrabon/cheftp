import React from "react";
import travis from "../../assets/Travis Pena 1.png"; // use the chef image you provided
import logo from "../../assets/Image_20250422_103510_144 1.png"; // use the chef logo you provided
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#d31313] text-white overflow-hidden">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row min-h-screen px-4 xl:px-0">

        {/* Left Sidebar */}
        <div className="flex flex-col items-center xl:items-start xl:justify-between xl:w-[20%] pt-10 xl:pt-16 pb-6 text-black">
          <div className="flex flex-col items-center xl:items-start">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-24 h-24 mb-6" />
            {/* Tagline */}
            {/* <p className="text-lg font-medium text-black text-center xl:text-left">
              Making people <br /> happy by way of <br /> food
            </p> */}
          </div>
        </div>

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

      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20">
        {/* Links */}
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>

        {/* Button */}
        <button className="bg-black text-white text-sm py-2 px-4 hover:bg-gray-800 transition-all">
          Request Service
        </button>
      </div>
    </section>
  );
}
