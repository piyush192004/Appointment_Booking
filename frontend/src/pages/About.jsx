import React from "react";

import { assets } from "./../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam
            libero, quaerat in minima labore consectetur fugit est, fugiat a
            accusantium quod, accusamus sequi adipisci quas tenetur hic ex
            nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur facilis totam ipsa et voluptates ut? Rem aut deleniti
            quos illum minima cum vel quia perspiciatis quidem reprehenderit?
            Magnam, asperiores excepturi?
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            possimus vitae eaque magnam voluptatum culpa minus voluptate placeat
            voluptatem corrupti beatae accusantium adipisci corporis, error
            repellat ducimus aperiam ipsa quidem!
          </p>
        </div>
      </div>
      <div className="text-xl my-4 ">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVINIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
