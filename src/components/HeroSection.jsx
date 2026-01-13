import React from "react";
import {
  APP_STORE_URL,
  PATHAO_LOGO,
  PLAY_STORE_URL,
  VIDEO_URL,
} from "../utils/app.constants";
import doublearrow from'../assets/double-arrow.svg'

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        className="inset-0 w-full h-full -z-10 object-cover absolute"
        src={VIDEO_URL}
        autoPlay
        loop
        playsInline
        muted
      />
      <div className="-z-10 absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
      <div className="flex flex-col items-center justify-center pt-120">
        <img src={PATHAO_LOGO} alt="pathao_logo" className="w-80" />
        <div className="mb-5 text-center px-5 font-bold text-white text-6xl mt-7 ">
          Nepal's #1 <br /> food delivery app
        </div>
        <span className="text-center text-white text-2xl font-medium px-5">
          Experience fast & easy online ordering <br />
          on the Pathao app
        </span>
        <div className="flex gap-5 mt-10">
          <img src={APP_STORE_URL} alt="app_store" className="w-50" />
          <img src={PLAY_STORE_URL} alt="play_store" className="w-50" />
        </div>
        <div className=" flex items-center justify-center gap-2 mt-15 animate-bounce cursor-pointer">
          <span className="text-white font-medium">Scroll down</span>
          <img src={doublearrow} alt="double-arrow" className=""/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
