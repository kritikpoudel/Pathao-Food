import React from "react";
import {
  BURGER_IMG_URL,
  CITIES_IMG_URL,
  LEAVES_IMG_URL,
  LEFT_SIDE_LINE,
  MOMO_IMG_URL,
  ORDER_DELIVERED_IMG_URL,
  PIZZA_IMG_URL,
  RESTAURANT_IMG_URL,
  RIGHT_SIDE_LINE,
  TOMATO_IMG_URL,
} from "../utils/app.constants";

const OrderSection = () => {
  return (
    <div className="h-148 relative ">
      <div className="absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%]">
        <img
          src={LEFT_SIDE_LINE}
          alt="left-side-line"
          className="h-auto w-full"
        />
      </div>
      <div className="absolute right-0 top-[-55%] h-auto w-[70%] translate-x-[65%]">
        <img
          src={RIGHT_SIDE_LINE}
          alt="right-side-line"
          className="h-auto w-full"
        />
      </div>
      <img
        src={BURGER_IMG_URL}
        alt="burger-img"
        className="w-60 absolute left-67 top-10 hover:scale-110 duration-200"
      />
      <img
        src={MOMO_IMG_URL}
        alt="momo-img"
        className="w-60 absolute right-75 -top-40 rotate-10 hover:scale-110 duration-200"
      />
      <img
        src={TOMATO_IMG_URL}
        alt="tomato-left"
        className="w-12 absolute left-50 top-100 hover:scale-110 duration-200 animate-bounce"
      />
      <img
        src={TOMATO_IMG_URL}
        alt="tomato--right"
        className="w-12 absolute right-35 top-30 rotate-45 hover:scale-110 duration-200 animate-bounce"
      />
      <img
        src={PIZZA_IMG_URL}
        alt="pizza-img"
        className="w-60 absolute right-50 top-35 hover:scale-110 duration-200"
      />
      <img
        src={LEAVES_IMG_URL}
        alt="leaves-img"
        className="w-12 absolute left-135  -top-35 hover:scale-110 duration-200 animate-bounce"
      />
      <div className="items-center justify-center text-center w-[30%] m-auto flex flex-col mt-60">
        <span className="text-carnation text-6xl font-semibold leading-18">
          Better food for more people
        </span>
        <span className="text-comet text-2xl mt-8 w-100 font-light leading-8">
          For over a decade, we’ve enabled our customers to discover new tastes,
          delivered right to their doorstep
        </span>
      </div>
      <div className="rounded-4xl bg-white shadow-2xl px-6 py-5 w-[53%] mt-40 items-center flex m-auto ">
        <div className="flex items-center justify-center border-r gap-3 flex-1 border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-4xl font-bold">3,00,000+</span>
            <span className="text-raven text-lg">restaurants</span>
          </div>
          <img
            src={RESTAURANT_IMG_URL}
            alt="restaurant-img"
            className="w-16 h-14"
          />
        </div>
        <div className="flex items-center justify-center border-r gap-3 flex-1 border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-4xl font-bold">800+</span>
            <span className="text-raven text-lg">cities</span>
          </div>
          <img
            src={CITIES_IMG_URL}
            alt="cities-img"
            className="w-9 h-12"
          />
        </div>
        <div className="flex items-center justify-center gap-3 flex-1 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-4xl font-bold">3 billion+</span>
            <span className="text-raven text-lg">orders delivered</span>
          </div>
          <img
            src={ORDER_DELIVERED_IMG_URL}
            alt="order-delivered-img"
            className="w-16 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
