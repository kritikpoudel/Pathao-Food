import React from "react";
import CompanyCard from "./CompanyCard";
import { BURGER_IMG_URL, CARD_LOGO, MOMO_IMG_URL, PARTY_IMG_URL, PATHAO_LOGO, PIZZA_IMG_URL } from "../utils/app.constants";

const Company = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="font-bold text-8xl text-center">Eternal</h1>
      <div className="flex w-full items-center my-6 justify-center">
        <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-[#D2D2D2] md:w-28"></div>
        <div className="px-[0.4em] text-center uppercase text-gray-500">
          <span className="font-medium text-3xl">
            POWERING Nepal’S <br />
            CHANGING LIFESTYLES
          </span>
        </div>
        <div className="h-0.5 w-12 bg-linear-to-l from-transparent to-[#D2D2D2] md:w-28"></div>
      </div>
      <div className="flex">

      <CompanyCard className=' from-white via-pink-100 to-pink-150' imgURL={PIZZA_IMG_URL} />
      <CompanyCard className ='from-white via-blue-100 to-blue-150' imgURL={BURGER_IMG_URL} />
      <CompanyCard className ='from-white via-green-100 to-green-150' imgURL={MOMO_IMG_URL}/>
      <CompanyCard className='from-white via-yellow-100 to-red-150' imgURL={PIZZA_IMG_URL}/>
      </div>
    </div>
  );
};

export default Company;
