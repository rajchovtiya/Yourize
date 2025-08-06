import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

function Navbar({ navabr }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`bg-black padding flex items-center justify-between h-[70px] relative ${navabr}`}>
        {/* Logo */}
        <NavLink to={'/'} className="absolute left-4 top-1/2 transform -translate-y-1/2 ">
          <img src="./img/Logo (2).png" alt="Logo" className="max-w-[140px] md:max-w-[183px]" />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-evenly w-full xl:ml-80 ml-40">
          <ul className="flex items-center gap-10 rounded-3xl py-2 px-10 border border-[#FAC817] shadow">
            <NavLink to={'/offering'} className="text_color font-light cursor-pointer">Offerings</NavLink>
            <NavLink to={'/Pricing'} className="text_color font-light cursor-pointer">Prices</NavLink>
            <NavLink to={'/OurWorks'} className="text_color font-light cursor-pointer">Our Works</NavLink>
          </ul>
          <NavLink to={'/ClientOnboardingForm'} className="py-2 px-6 rounded-2xl border border-[#FAC817] shadow text_color font-light ml-4 hover:bg-[#FAC817] hover:text-black transition-colors duration-300">
            Book Demo
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <CiMenuBurger className='text-3xl cursor-pointer text_color' />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 z-[100] w-full bg-black flex flex-col items-center gap-4 py-4  ">
            <ul className="flex flex-col items-center gap-3">
              <NavLink to={'/offering'} className="text_color font-light cursor-pointer" onClick={() => { setMenuOpen(false) }}>Offerings</NavLink>
              <NavLink to={'/Pricing'} className="text_color font-light cursor-pointer" onClick={() => { setMenuOpen(false) }}>Prices</NavLink>
              <NavLink to={'/OurWorks'} className="text_color font-light cursor-pointer" onClick={() => { setMenuOpen(false) }}>Our Works</NavLink>
            </ul>
            <NavLink to={'/ClientOnboardingForm'} className="py-2 px-4 rounded-2xl border border-[#FAC817] shadow text_color font-light" onClick={() => { setMenuOpen(false) }}>
              Book Demo
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
