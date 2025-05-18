import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start justify-between px-6 xl:px-12">

        {/* Vertical Text */}
        <div className="hidden xl:block text-red-600 text-sm font-semibold rotate-180 writing-vertical h-full pt-20">
          <p className="transform -rotate-90 tracking-widest">ABOUT TRAVIS</p>
        </div>

        {/* Content Column */}
        <div className="flex-1 xl:ml-20 max-w-[700px]">
          <h2 className="text-4xl xl:text-5xl font-bold mb-6">
            Serving the world one bite at a time
          </h2>
          <p className="text-lg leading-8 text-gray-700">
            Travis Pena is not just a chef — he's an experience. With years of culinary excellence across American, French, and Italian cuisine, his mission is to bring joy to every table he serves. From intimate dinners to international festivals, his flavorful creations unite hearts and bellies alike.
          </p>
        </div>

        {/* Image */}
        <div className="mt-10 xl:mt-0 xl:ml-16">
          <img
            src="/about-dish.png"
            alt="Signature Dish"
            className="w-full max-w-[400px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
