import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-black padding p-10 mt-20'>
            <div className='borderss py-6 px-7 relative'>
                <div className='flex items-center justify-between mt-10'>
                    <NavLink to={'/'} className="absolute  left-0 top-1  ">
                        <img src="./img/Logo (2).png" alt="Logo" className="max-w-[140px] md:max-w-[183px]" />
                    </NavLink>
                    <ul className='w-[100%] flex items-end just gap-5'>
                        <NavLink to={'/'} className='text_color2 cursor-pointer'>Home</NavLink>
                        <NavLink to={'/offering'} className='text_color2 cursor-pointer'>Offering</NavLink>
                        <NavLink to={'/Pricings'} className='text_color2 cursor-pointer'>Prices</NavLink>
                        <NavLink to={'/OurWorks'} className='text_color2 cursor-pointer'>Our Work</NavLink>
                    </ul>
                </div>
                <div className='flex items-center justify-between mt-16'>
                    <div>
                        <p className='text_color2'>Contact details : mail and phone</p>
                        <p className='text_color2'>Support : Support@yourize.in</p>
                        <p className='text_color2'>Enquiry : connect@protip.in</p>
                    </div>
                    <div>
                        <p className='text_color2'>Terms & conditions</p>
                        <p className='text_color2'>Refund policy</p>
                        <p className='text_color2'>Privacy policy</p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-10'>
                    <div className='flex gap-5 '>
                        <div className=' rounded-full flex icone items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors duration-300 h-16 w-16'>
                            <FaLinkedinIn className='text_color2 text-xl' />
                        </div>
                        <div className=' rounded-full flex icone items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors duration-300 h-16 w-16'>
                            <FaFacebookF className='text_color2 text-xl' />
                        </div>
                        <div className=' rounded-full flex icone items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors duration-300 h-16 w-16'>
                            <FaTwitter   className='text_color2 text-xl' />
                        </div>

                    </div>
                    <div className='text_color2 text-gray-300 opacity-45'>
                        <p>© 2024 Yourize. All rights reserved.</p>
                    </div>
                    <div>
                        <p className='text_color'>WeWork Latitude, 9th floor, RMZ </p>
                        <p className='text_color'>Latitude Commercial, Bellary Road,</p>
                        <p className='text_color'>Hebbal, Near Godrej Apt, Bangalore,</p>
                        <p className='text_color'>Karnataka 560024</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer
