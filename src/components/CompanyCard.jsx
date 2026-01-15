import React from 'react'
import { CARD_LOGO } from '../utils/app.constants';

const CompanyCard = ({className,imgURL}) => {
  return (
    <div className="flex justify-center items-center min-h-125] p-6">
      {/* Main Card Container */}
      <div className={`w-90 bg-linear-to-tr rounded-[3rem] p-10 ${className} shadow-xl border border-pink-100/50 flex flex-col items-center text-center transition-transform hover:scale-110 duration-300`}>
        
        {/* Red Icon Box */}
        <img src={imgURL} alt="card-logo" width={200} className='rounded-2xl'/>

        {/* Title */}
        <h2 className="text-[#1c1c1c] text-3xl font-bold mb-4 tracking-tight mt-5">
         Pathao
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-8 px-2 font-medium">
          Get the app now to start ordering your favorite dishes!
        </p>
        <button className="group flex items-center gap-2 text-[#1c1c1c] font-bold text-lg hover:text-red-500 transition-colors">
          Check it out
          <span className="text-red-500 group-hover:translate-x-1 transition-transform duration-200">
            ▶
          </span>
        </button>
      </div>
    </div>
  );
};

export default CompanyCard