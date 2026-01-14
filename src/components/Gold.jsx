import React from "react";
import { FREE_DELIVERY_IMG_URL, GOLD_STAR_IMG_URL, PATHAO_LOGO, SCOTTER_IMG_URL } from "../utils/app.constants";

const Gold = () => {
  return (
    <div className="relative overflow-hidden overflow-x-hidden  py-[15vw]">
      <div className="relative flex w-full flex-col items-center justify-center bg-black px-10 py-[13vw] text-white">
        <img
          src={GOLD_STAR_IMG_URL}
          className="absolute left-0 top-10 z-20 size-28 lg:size-36 xl:size-48"
          alt="coin"
        />
        <img
          src={GOLD_STAR_IMG_URL}
          className="absolute right-4 -top-10 z-20 size-80 rotate-90"
          alt="coin"
        />

        <img
          src={GOLD_STAR_IMG_URL}
          className="absolute bottom-[5vw] right-[15vw] z-20 size-40"
          alt="coin"
        />

        <div className="z-10 flex flex-col items-center justify-center gap-8 ">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              alt="Gold logo"
              src={PATHAO_LOGO}
              className="mx-auto h-auto w-40 "
            />
            <h1 className=" text-center bg-clip-text text-transparent bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] text-8xl font-bold">Gold</h1>
            <div className="text-center font-normal bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl">
              <div>Nepal’s Top Savings</div>
              <div>Program for Food Lovers</div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-4">
            <span className="text-[#E9C789]">★</span>
            <span className="tracking-[4px] text-center text-white font-bold text-sm md:text-base">
              GOLD BENEFITS
            </span>
            <span className="text-[#E9C789]">★</span>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="flex items-center gap-4">
              <img
                src={FREE_DELIVERY_IMG_URL}
                className="h-16 w-16"
                alt="Free Delivery"
              />
              <div className="flex flex-col">
                <span className="text-xl font-medium bg-linear-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text text-transparent">
                  Free Delivery
                </span>
                <span className="text-sm bg-linear-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent">
                  At all restaurants within 7 km
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={SCOTTER_IMG_URL}
                className="h-16 w-16"
                alt="Extra Off"
              />
              <div className="flex flex-col">
                <span className="text-xl font-medium bg-linear-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text text-transparent">
                  Up to 30% extra off
                </span>
                <span className="text-sm bg-linear-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent">
                  At 20,000+ partner restaurants
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 bg-white w-full h-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="block w-full overflow-hidden">
            <circle
              cx="100"
              cy="-380"
              r="400"
              fill="white"
              stroke="white"
            ></circle>
          </svg>
        </div>
        <div className="left-0 absolute bottom-0 h-0 w-full rotate-180 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="block w-full overflow-hidden">
            <circle
              cx="100"
              cy="-380"
              r="400"
              fill="white"
              stroke="white"
            ></circle>
          </svg>
        </div>
      </div>
      
    </div>
  );
};

export default Gold;
