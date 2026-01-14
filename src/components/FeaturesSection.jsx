import React from "react";
import { CALENDAR_IMG_URL, COLLECTIONS_IMG_URL, GIFT_CARDS_IMG_URL, GOURMET_IMG_URL, HEALTHY_IMG_URL, NON_VEG_IMG_URL, OFFERS_IMG_URL, PARTY_IMG_URL, PHONE_IMG_URL, VEG_MODE_IMG_URL } from "../utils/app.constants";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  return (
    <div className="h-120 bg-linear-to-b from-chablis to-white ">
      <div className="relative text-center flex flex-col items-center justify-center py-28">
        <span className=" text-carnation text-center font-semibold text-6xl ">
          What’s waiting for you <br />
          on the app?
        </span>
        <span className="text-comet text-2xl mt-8 w-100 font-light leading-8">
          Our app is packed with features that enable you to experience food
          delivery like never before
        </span>
        <div className="relative">
          <img src={PHONE_IMG_URL} alt="phone-img" className="mt-6 w-76 " />
          <div className="absolute top-35 left-22 shadow-xl bg-white rounded-3xl flex flex-col items-center justify-center border-athens-gray py-4 pb-2">
            <img
              src={CALENDAR_IMG_URL}
              alt="calendar-img"
              className="w-35 h-25"
            />
            <span>Schedule<br/> your order</span>
          </div>
        </div>
        <FeaturesCard imgUrl={VEG_MODE_IMG_URL} title="Veg Mode" className='bottom-72 left-140'/>
        <FeaturesCard imgUrl={PARTY_IMG_URL} title="Plan a Party" className='left-110 bottom-30'/>
        <FeaturesCard imgUrl={HEALTHY_IMG_URL} title="Healthy" className='bottom-70 left-100'/>
        <FeaturesCard imgUrl={GIFT_CARDS_IMG_URL} title="Gift cards" className='bottom-25 left-150'/>
        <FeaturesCard imgUrl={NON_VEG_IMG_URL} title={<>Non-Veg<br/> Mode</>} className='bottom-30 right-140'/>
        <FeaturesCard imgUrl={GOURMET_IMG_URL} title='Gourmet' className='bottom-65 right-150'/>
        <FeaturesCard imgUrl={OFFERS_IMG_URL} title="Offers" className='right-110 bottom-72'/>
        <FeaturesCard imgUrl={COLLECTIONS_IMG_URL} title="Collections" className='right-100 bottom-35'/>

      </div>
    </div>
  );
};

export default FeaturesSection;
