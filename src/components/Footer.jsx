import React from "react";
import {
  APP_STORE_URL,
  PATHAO_LOGO,
  PLAY_STORE_URL,
} from "../utils/app.constants";

const Footer = () => {
  return (
    <div className="flex relative bg-black items-center justify-center pb-20">
      <footer className="px-5 pt-4 text-white w-239 mt-10">
        <div className="flex w-full items-center justify-start py-6">
          <img
            src={PATHAO_LOGO}
            alt="pathao-logo"
            width={250}
            className="hover:scale-110 duration-500 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-5 gap-15 pt-5">
          <div>
            <h1 className="text-md font-bold ">Eternals</h1>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2 mt-3">
              Pathao Food
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Pathao Ride
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Pathao Delivery
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Pathao service
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer">
              Pathao Business
            </p>
          </div>
          <div>
            <h1 className="text-md font-bold ">For Restaurants</h1>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2 mt-3">
              Partner With Us
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Apps For You
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer">
              Restaurants Consulting
            </p>
          </div>
          <div>
            <h1 className="text-md font-bold ">For Delivery Partners</h1>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2 mt-3">
              Pathao Food
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Partner With Us
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer">
              Apps For You
            </p>
          </div>
          <div>
            <h1 className="text-md font-bold ">Learn More</h1>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2 mt-3">
              Security
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Privacy
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Terms of Service
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Help & Support
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mb-2">
              Report a Fraud
            </p>
            <p className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer">
              Blog
            </p>
          </div>
          <div>
            <h1 className="text-md font-bold ">Social Links</h1>
            <div className="">!!! !!! !!! !!! !!!</div>
            <div className="flex flex-col gap-5 mt-6">
              <img
                src={APP_STORE_URL}
                alt="app-store"
                className="hover:scale-110 duration-200"
              />
              <img
                src={PLAY_STORE_URL}
                alt="playstore-store"
                className="hover:scale-110 duration-200"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <hr class="border-gray-600 my-4"></hr>
          <p className="text-[10px] text-gray-600 pr-20">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners 2026 © Pathao Ltd. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
