import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

function HomeHarder() {
    return (
        <div className="flex flex-col items-center justify-center mt-6 px-4 sm:px-6 md:px-10 z-50">
            {/* Banner */}
            <div className="flex items-center justify-between gap-3 bg-black rounded-3xl py-2 px-5 sm:px-7 border border-[#FAC817] z-40">
                <div className="bg-[#FAC817] text-[10px] font-semibold rounded-2xl py-1 px-2 flex items-center justify-center">
                    NEW
                </div>
                <p className="text_color text-sm sm:text-base font-medium">
                    Start your journey to higher AUM only at ₹18/day
                </p>
            </div>

            {/* Main Heading */}
            <div className="mt-6 flex flex-col items-center text-center w-full z-50">
                <h1 className="text_color2 text-3xl sm:text-5xl md:text-6xl font-normal drop_shadow">
                    Build your brand win
                </h1>
                <h1 className="text_color2 text-3xl sm:text-5xl md:text-6xl font-normal mt-1 drop_shadow">
                    more clients and
                </h1>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium linear_gradient">
                    Grow your AUM
                </h1>

                {/* Subtext */}
                <div className="mt-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <p className="text_color2 font-light drop_shadow">
                        Yourize is an all-in-one marketing and lead management platform built exclusively for
                        Mutual
                    </p>
                    <p className="text_color2 font-light drop_shadow">
                        fund distributors, Independent Financial advisors, Investment advisors, Certified
                    </p>
                    <p className="text_color2 font-light drop_shadow">
                        financial professionals, Family offices, Insurance agents.
                    </p>
                </div>

                {/* Call to Action */}
                <div
                    className="border border-[#FAC817] text-[#FAC817] bg-black font-semibold rounded-2xl py-2.5 px-6 mt-7
          flex items-center gap-2 cursor-pointer drop_shadow2 drop_shadow3 transition-all duration-300
          hover:bg-[#FAC817] hover:text-black"
                >
                    Let’s Talk
                    <div className="h-5 w-5 rounded-full bg-[#FAC817] text-black flex items-center justify-center">
                        <CgArrowTopRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHarder;
