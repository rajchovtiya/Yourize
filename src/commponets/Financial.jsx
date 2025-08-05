import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

function Financial() {
    return (
        <div className='mt-16 relative '>
            <img src="./img/linebox.png" alt="" className='z-10 max-h-[580px] object-cover w-full absolute top-[-2%] opacity-30' />
            <div className='flex  gap-24 justify-around padding z-50 relative'>
                <div className='bg-black p-9 border mt-20 border-[#FAC817] rounded-lg w-[350px] h-[250px]
                 shadow6 
               '>
                    <h1 className='text_color2 text-xl font-semibold'>Product</h1>
                    <h1 className='text-[#FAC817] text-xl font-semibold'>Rating</h1>
                    <h1 className='text-6xl font-bold linear_gradient mt-4'>4.5</h1>
                    <div className='flex items-center justify-between w-full mt-4'>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStar className='text-[#FCDE73]' />
                            <FaStarHalf className='text-[#FCDE73]' />
                        </div>
                        <div>
                            <h1 className='text_color2 text-2xl'>100+</h1>
                            <p className='text_color2 text-2xl'>Reviews</p>
                        </div>

                    </div>
                </div>
                <div className=' mt-16'>
                    <h1 className='text-6xl text_color2'>Why Financial</h1>
                    <h1 className='linear_gradient text-5xl'>Professinals Love Yourize?</h1>
                    <ul className='mt-5'>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />No Marketing Knowledge required</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Saves 10+ Hours every week</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Helps you look and feel like a Professional brand</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Generates exponential lead growth</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Drives client inquiries from across India</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Helps you acquire more new clients effortlessly</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Builds stroger client trust and long-term value</li>
                        <li className='flex items-center gap-3 text_color2 mt-2'><img src="./img/Growth.png" alt="" className='max-w-[30px] drop_shadow4' />Designed only for MFDs,RLAs,CFps & Insurance Experts</li>


                    </ul>
                </div>
                

            </div>
        </div>
    )
}

export default Financial
