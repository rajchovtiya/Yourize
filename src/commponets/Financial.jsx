import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function Financial() {
    return (
        <div className='mt-16 relative'>
            {/* Background image */}
            <img
                src="./img/linebox.png"
                alt=""
                className='z-10 max-h-[580px] object-cover w-full absolute top-[-2%] opacity-30'
            />

            {/* Main content */}
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 justify-around px-4 md:px-12 z-50 relative'>

                {/* Rating Box */}
                <div className='bg-black p-6 md:p-9 border mt-10 border-[#FAC817] rounded-lg w-full md:w-[400px] h-[330px] shadow6'>
                    <h1 className='text_color2 text-xl font-semibold'>Product</h1>
                    <h1 className='text-[#FAC817] text-xl font-semibold'>Rating</h1>
                    <h1 className='text-5xl md:text-6xl font-bold linear_gradient mt-4'>4.5</h1>

                    <div className='flex items-center justify-between w-full mt-4'>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStarHalf className='text-[#FCDE73]' />
                        </div>
                        <div>
                            <h1 className='text_color2 text-xl md:text-2xl'>100+</h1>
                            <p className='text_color2 text-xl md:text-2xl'>Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Text + List Section */}
                <div className='mt-10 lg:mt-16 w-full max-w-3xl'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text_color2 font-bold text-center'>
                        Why Financial
                    </h1>
                    <h1 className='text-center linear_gradient text-3xl md:text-4xl lg:text-5xl font-semibold mt-1'>
                        Professionals Love Yourize?
                    </h1>

                    <ul className='mt-6 space-y-4'>
                        {[
                            "No Marketing Knowledge required",
                            "Saves 10+ Hours every week",
                            "Helps you look and feel like a Professional brand",
                            "Generates exponential lead growth",
                            "Drives client inquiries from across India",
                            "Helps you acquire more new clients effortlessly",
                            "Builds stronger client trust and long-term value",
                            "Designed only for MFDs, RLAs, CFps & Insurance Experts"
                        ].map((item, index) => (
                            <li key={index} className='flex items-center md:items-start gap-3 text_color2 text-base md:text-lg'>
                                <img
                                    src="./img/Growth.png"
                                    alt=""
                                    className='w-6 h-6 mt-1 drop_shadow4'
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Financial;
