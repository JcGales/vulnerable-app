import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div>
          <p className='text-x1 font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
          <ul className='flex flex-col gap-1 text'>
            <li>+63 950-7867-934</li>
            <li>ocampojohn939@gmail.com</li>
            <li>Fb: John Cedrick Gales</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2025 @SneakPeakPh.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer