import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
  <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

    {/* Logo and About Section */}
    <div>
      <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
      <p className='w-full md:w-2/3 text-gray-600'>
        At Forever, we believe fashion is more than just clothing—it's a way to express your individuality 
        and embrace confidence. Our mission is to bring you high-quality, stylish, and affordable apparel that suits every occasion.
      </p>
    </div>

    {/* Company Links */}
    <div>
      <p className='text-xl font-medium mb-4'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>HOME</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+947 145 6547</li>
            <li>contact@foreveryou.com</li>
        </ul>
    </div>
  </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All Rights Reserved</p>
    </div>
</div>

  )
}

export default Footer