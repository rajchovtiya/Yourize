import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGrowWithUsAnimation from '../../customHooks/useGrowWithUsAnimation';

gsap.registerPlugin(ScrollTrigger);

const GrowWithUsData = [
    {
        id: 1,
        icon: "./img/Icon1.png",
        title: "Branding ",
        title2: "& Marketing Resources",
        description: [
            "Ready-to-use whitelabel images & videos for your social media",
            "Regional language content to reach customers in their own language",
            "Easy-to-create sales proposals & presentations",
            "Professional introductory decks for client meetings",
            "Personal branding videos to showcase your expertise",
            "Website design & logo creation for a complete digital identity"
        ],
    },
    {
        id: 2,
        icon: "./img/Icon2.png",
        title: "Social Media",
        title2: "Management",
        description: [
            "End-to-end social media handling from posting to engagement",
            "Replying to client messages & comments quickly",
            "Running targeted ads to generate quality leads",
            "Posting blogs & articles to educate and attract investors",
            "Investor awareness campaigns (SIP benefits, mutual fund myths, financial planning tips , Insurance)",
            "Compliance-friendly content that matches SEBI guidelines",
            "Festive & occasion-based campaigns to connect with clients personally"
        ],
    },
    {
        id: 3,
        icon: "./img/Icon3.png",
        title: "Exclusive Events",
        title2: "& Workshops",
        description: [
            "Access to industry seminars and offline events",
            "Discounts & complimentary passes for paid events and workshops",
            "Learn about the latest market trends, branding & marketing strategies",
            "Investor education workshops you can host under your own brand",
            "Networking opportunities with other MFDs and industry experts",
            "Training sessions on market trends and other strategies",
            "Exclusive access to Yourize community."
        ],
    }
];

function GrowWithUs() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useGrowWithUsAnimation(sectionRef, cardsRef);

    return (
        <div className='padding mt-11' ref={sectionRef}>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-5xl text_color2 text-center section-heading'>Everything you need to Grow</h1>
                <h1 className='linear_gradient text-5xl mt-[20px] text-center section-heading'>All in One Platform</h1>
                <p className='text_color mt-8 font-light text-[20px] text-center section-heading'>
                    We help Mutual Fund Distributors grow their business, build a strong brand
                </p>
                <p className='text-center text_color font-light text-[20px] section-heading'>
                    and connect better with investors.
                </p>
            </div>

            <div className='flex items-center md:items-center justify-center md:justify-between mt-10 flex-wrap gap-6'>
                {GrowWithUsData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="w-full md:w-[390px] h-[660px] pb-6 rounded-[20px] bg-[#000000] relative p-6 px-6 text-white 
                        shadow-lg overflow-hidden border border-[#FAC817] boxswdobox_shadow4 "
                    >
                        {/* Glow background */}
                        <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#FAC817] 
                            opacity-[0.2] rounded-full blur-[100px] pointer-events-none z-0"></div>

                        {/* Glowing points */}
                        {[
                            { top: '10%', left: '10%' },
                            { top: '20%', right: '15%' },
                            { top: '50%', left: '50%' },
                            { top: '70%', right: '10%' },
                            { bottom: '20%', left: '15%' },
                            { bottom: '10%', right: '20%' },
                            { top: '35%', left: '25%' }
                        ].map((pos, i) => (
                            <div
                                key={i}
                                className="absolute w-[8px] h-[8px] bg-[#FAC817] blur-sm rounded-full opacity-80 z-10"
                                style={pos}
                            ></div>
                        ))}

                        {/* Icon */}
                        <div className="mx-auto mb-6 flex items-center justify-center text-yellow-400 text-xl z-10 relative">
                            <img src={item.icon} alt="" className='max-w-[70px]' />
                        </div>

                        {/* Title */}
                        <h2 className="text-center text-[25px] font-medium">{item.title}</h2>
                        <h2 className="text-center text-[22px] font-medium text-[#817D6E]">{item.title2}</h2>

                        {/* Description */}
                        <p className="text-center text-sm text-gray-400 mb-5 mt-5">{item.description[0]}</p>
                        <div className="space-y-4 text-sm text-white leading-relaxed text-center">
                            {item.description.slice(1).map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                        </div>

                        <p className="text-center text-yellow-400 text-sm mt-8">
                            {item.note}
                        </p>

                        {/* Corners */}
                        <div className='absolute top-0 left-0'>
                            <img src="./img/Line 1.png" alt="" />
                        </div>
                        <div className='absolute top-0 right-0'>
                            <img src="./img/Line 2.png" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GrowWithUs;
