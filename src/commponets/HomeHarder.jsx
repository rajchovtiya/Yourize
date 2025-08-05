import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

function HomeHarder() {
    return (
        <div className='flex items-center justify-center flex-col mt-6 z-50'>
            <div className='flex items-center justify-between gap-3 bg-black z-40 rounded-3xl py-2 px-7 borders'>
                <div className='bg-[#FAC817] text-[10px] font-semibold rounded-2xl py-1 px-2 flex items-center justify-center'>NEW</div>
                <p className='text_color'>Start your journey to higher AUM only at ₹18/day</p>
            </div>
            <div className='mt-6 flex items-center justify-center w-full flex-col z-50'>
                <h1 className='text_color2 text-6xl font-normal drop_shadow'>Build your brand win </h1>
                <h1 className='text_color2 text-6xl font-normal mt-1 drop_shadow'>more clients and</h1>
                <h1 className='text-6xl font-medium linear_gradient  '>Grow your AUM</h1>
                <div className='mt-5 flex items-center justify-center flex-col'>
                    <p className='text_color2 font-light drop_shadow'>Yourize is all in one marketing and lead management platform built exclusive for Mutual</p>
                    <p className='text_color2 font-light drop_shadow'>fund distributors, Independent Financial advisors, Investment advisors, Certified</p>
                    <p className='text_color2 font-light drop_shadow'>financial professionals, Family offices, Insurance agents.</p>
                </div>
                <div className='border border-[#FAC817] text-[#FAC817] bg-black font-semibold rounded-2xl 
                py-2.5 px-6 mt-7 flex items-center justify-between gap-2 cursor-pointer drop_shadow2 scroll-py-8 drop_shadow3 hover:bg-[#FAC817] hover:text-black transition-colors duration-300'>
                    Let’s Talk
                    <div className='h-[20px] w-[20px] rounded-[50%] bg-[#FAC817] text-black flex items-center justify-center'>
                        <CgArrowTopRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHarder
