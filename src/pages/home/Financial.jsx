import React, { useEffect, useRef } from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Financial() {
    const ratingBoxRef = useRef(null);
    const textSectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(ratingBoxRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: ratingBoxRef.current,
                    start: "top 7%",
                }
            }
        );

        gsap.fromTo(textSectionRef.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                scrollTrigger: {
                    trigger: textSectionRef.current,
                    start: "top 7%",
                }
            }
        );
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black flex-col py-10 px-4 mt-16 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('./img/linebox.png')` }}
            ></div>

            {/* Main content */}
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 items-center justify-around px-4 md:px-12 z-50 relative'>

                {/* Rating Box */}
                <div
                    ref={ratingBoxRef}
                    className='bg-black p-6 md:p-9 border mt-10 border-[#FAC817] rounded-lg w-full md:w-[450px] h-[270px] shadow6'
                >
                    <h1 className='text_color2 text-xl font-semibold'>Product</h1>
                    <h1 className='text-[#FAC817] text-xl font-semibold'>Rating</h1>
                    <h1 className='text-5xl md:text-6xl font-extrabold linear_gradient mt-4'>4.5</h1>

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
                <div
                    ref={textSectionRef}
                    className='mt-10 lg:mt-16 w-full max-w-3xl'
                >
                    <h1 className='text-4xl md:text-5xl lg:text-6xl text_color2 font-bold text-center md:text-start'>
                        Why Financial
                    </h1>
                    <h1 className='text-center linear_gradient text-3xl md:text-4xl lg:text-5xl font-semibold mt-1 md:text-start'>
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
    );
}

export default Financial;
