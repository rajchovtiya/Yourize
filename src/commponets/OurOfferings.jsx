import React from 'react';
import BookDemo from './BookDemo';

const OurOfferingsData = [
    {
        id: 1,
        image: "./img/box1.png",
        title: "Branding & Content Creation",
        description: [
            "Personalized marketing collaterals (posts, creatives, brand kits)",
            "Website creation & visual branding (logo, color palette, business cards)",
            "Video editing & voiceover services",
            "Festive & monthly campaign kits",
            "Auto-generated sales proposals",
        ],
    },
    {
        id: 2,
        image: "./img/box2.png",
        title: "Social Media & Outreach",
        description: [
            "Done-for-you social media management",
            "Predefined email & WhatsApp templates",
            "Email & WhatsApp marketing setup",
            "Blogs & articles for client education",
            "Weekly market insights",
        ],
    },
    {
        id: 3,
        image: "./img/box3.png",
        title: "Smart Tech & Automation",
        description: [
            "Client onboarding workflows",
            "Automated portfolio reviews",
            "Paperless forms & e-signatures",
            "Lead management system",
            "CRM integration & reminders",
        ],
    },
    {
        id: 4,
        image: "./img/box4.png",
        title: "Learning & Community",
        description: [
            "Learning modules for MFDs & RIAs",
            "Exclusive webinars & masterclasses",
            "Offline events & regional workshops",
            "Yourize Community access",
        ],
    },
    {
        id: 5,
        image: "./img/box5.png",
        title: "Client Engagement & Advisory Support",
        description: [
            "MF research tools (curated fund comparisons, analysis)",
            "Goal-based financial calculators",
            "Ready-to-share client education content",
        ],
    },

];

function OurOfferings() {
    return (
        <div>
            {/* Header Section */}
            <div className="padding mt-10 relative">
                <img
                    src="./img/linebox.png"
                    alt=""
                    className="z-10 max-h-[500px] absolute left-0 object-cover w-full opacity-30"
                />
                <div className="h-[500px] flex items-center justify-center flex-col gap-5 z-50 relative">
                    <h1 className="linear_gradient text-7xl text-center font-normal z-50">
                        Our Offerings
                    </h1>
                    <p className="text_color2 text-center mt-8">
                        Everything you need to grow your financial advisory practice — in one place. Yourize delivers
                    </p>
                    <p className="text_color2 text-center">
                        powerful branding, effortless automation, client education, and a thriving community so you
                    </p>
                    <p className="text_color2 text-center">
                        can focus on what matters most: serving your clients and building trust.
                    </p>
                </div>
            </div>

            {/* Offerings Cards */}
            <div className="flex flex-wrap items-start justify-center mt-12 padding gap-10">
                {OurOfferingsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-[326px] h-[510px] border-[0.3px] border-[#FAC817] rounded-[38px] overflow-hidden relative bg-[#000000] shadow-lg boxswdobox_shadow5 px-3.5 pb-6"
                    >
                        <div className="absolute w-[326px]">
                            <img
                                src="./img/linebox.png"
                                alt=""
                                className="z-10 max-h-[190px] object-cover w-full opacity-30"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mt-4">
                            <div className="w-[258px] h-[147px] border-[0.3px] border-[#FAC817] rounded-2xl flex items-center justify-center relative z-50">
                                <img src={item.image} alt="" />
                                <div className="absolute top-0 h-[50%] w-full rounded-t-2xl opacity-40 blur-sm z-0 bg-[#FAC817] boxsedobox"></div>
                            </div>
                        </div>
                        <h2 className="text-center text-3xl font-medium text_color mt-6">
                            {item.title}
                        </h2>
                        <div className="mt-4 space-y-3">
                            {item.description.map((point, idx) => (
                                <p key={idx} className="text_color2 text-center z-50">
                                    {point}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

          
        </div>
    );
}

export default OurOfferings;
