import React from "react";
import { APP_STORE_URL, PHONE_IMG_URL, PLAY_STORE_URL } from "../utils/app.constants";
import qrCode from'../assets/QR.png'

const Download = () => {
  return (
    <div className="relative w-screen flex items-center justify-center pt-30 pb-20">
      {/* Inner div */}
      <div className="w-[70%] h-[50vh] bg-white rounded-4xl bg-linear-to-tr  from-pink-200 to-pink-150  border-pink-200 border-4 px-12 pt-30 flex items-center justify-evenly">
        <div className="flex flex-col items-start justify-start">
          <span className="text-4xl font-semibold">Download the app now!</span>
          <span className="text-2xl font-medium text-gray-500 mt-7">
            Experience seamless online ordering
            <br /> only on the Pathao app
          </span>
          <div className="flex gap-8 mt-20 items-center justify-items-start">
            <img src={APP_STORE_URL} alt="app-store" width={150} className="hover:scale-130 duration-200"/>
            <img src={PLAY_STORE_URL} alt="play-store" width={150} className="hover:scale-130 duration-200" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            <img src={PHONE_IMG_URL} alt="phone-img" width={360} className="mt-5" />
            <div className="absolute items-center justify-center top-20 left-20 flex flex-col ">
                <span className="text-center items-center text-md font-bold text-gray-500 mb-5  ">Scan the QR code to <br/> download the app</span>
                <img src={qrCode} alt="qr" width={200} className="border-pink-200 border-2 rounded-2xl"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
