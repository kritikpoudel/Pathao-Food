import React from 'react'
import { NON_VEG_IMG_URL } from '../utils/app.constants'

const FeaturesCard = ({imgUrl,title,className}) => {
  return (
    <div className={`py-4 pb-2 ${className} absolute shadow-xl bg-white rounded-3xl flex flex-col items-center justify-center border-athens-gray `}>
        <img src={imgUrl} alt={title} className={`${imgUrl == NON_VEG_IMG_URL?'w-15 h-14': 'w-27.75 h-17.25'}`}/>
        <span className='text-ebony-clay py-2 px-5'>{title}</span>
    </div>
  )
}

export default FeaturesCard