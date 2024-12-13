import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700'>
          <div className='flex flex-col items-center'>
            <img src={assets.exchange_icon} className='w-12 mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-700 text-center'>We offer hassle-free exchange policy</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={assets.quality_icon} className='w-12 mb-5' alt="" />
            <p className='font-semibold'>7 Days return Policy</p>
            <p className='text-gray-700 text-center'>We offer 7 days free return policy</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={assets.support_img} className='w-12 mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-700 text-center'>we provide 24x7 customer Support</p>
          </div>
        </div>
      );
}

export default OurPolicy