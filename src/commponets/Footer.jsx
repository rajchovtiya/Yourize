import React from 'react'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FiYoutube } from "react-icons/fi";

function Footer() {
    return (
        <div className='bg-black px-4 py-10 mt-20'>
            <div className='borderss py-6 px-4 md:px-7 relative'>
                {/* Top Navigation */}
                <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-10 gap-5'>
                    <NavLink to={'/'} className="md:absolute md:left-0 md:top-1">
                        <img src="./img/Logo (2).png" alt="Logo" className="max-w-[140px] md:max-w-[183px]" />
                    </NavLink>

                    <ul className='w-full md:w-full flex flex-wrap justify-center  md:justify-end gap-4 mt-4 md:mt-0'>
                        <NavLink to={'/'} className='text_color2 cursor-pointer'>Home</NavLink>
                        <NavLink to={'/offering'} className='text_color2 cursor-pointer'>Offering</NavLink>
                        <NavLink to={'/Pricings'} className='text_color2 cursor-pointer'>Prices</NavLink>
                        <NavLink to={'/OurWorks'} className='text_color2 cursor-pointer'>Our Work</NavLink>
                    </ul>
                </div>

                {/* Contact and Terms Section */}
                <div className='flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-between mt-14 gap-6'>
                    <div>
                        <p className='text_color2'>Contact details : mail and phone</p>
                        <p className='text_color2'>Support : Support@yourize.in</p>
                        <p className='text_color2'>Enquiry : connect@protip.in</p>
                    </div>
                    <div>
                        <p className='text_color2'>Terms & conditions</p>
                        <p className='text_color2 text-right'>Refund policy</p>
                        <p className='text_color2 text-right'>Privacy policy</p>
                    </div>
                </div>

                {/* Socials, Copyright, Address */}
                <div className='flex flex-col md:flex-row items-center justify-between mt-10 gap-8 text-center md:text-left'>
                    {/* Social Icons */}
                    <div className='flex gap-4 justify-center md:justify-start'>
                        <a href="https://www.linkedin.com/company/yourizein/">
                            <div className='rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 hover:text-black transition-colors duration-300 h-12 w-12 md:h-14 md:w-14'>
                                <FaLinkedinIn className='text_color2 text-lg md:text-xl' />
                            </div>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61579010946823&rdid=g88VIh38GKellCiz#">
                            <div className='rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 hover:text-black transition-colors duration-300 h-12 w-12 md:h-14 md:w-14'>
                                <FaFacebookF className='text_color2 text-lg md:text-xl' />
                            </div>
                        </a>
                        <div className='rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 hover:text-black transition-colors duration-300 h-12 w-12 md:h-14 md:w-14'>
                            <FaTwitter className='text_color2 text-lg md:text-xl' />
                        </div>
                        <a href="#">
                            <div className='rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 hover:text-black transition-colors duration-300 h-12 w-12 md:h-14 md:w-14'>
                                <FiYoutube className='text_color2 text-lg md:text-xl' />
                            </div>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className='text_color2 text-gray-300 opacity-45'>
                        <p>© 2024 Yourize. All rights reserved.</p>
                    </div>

                    {/* Address */}
                    <div className='text_color'>
                        <p>WeWork Latitude, 9th floor, RMZ</p>
                        <p>Latitude Commercial, Bellary Road,</p>
                        <p>Hebbal, Near Godrej Apt, Bangalore,</p>
                        <p>Karnataka 560024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
