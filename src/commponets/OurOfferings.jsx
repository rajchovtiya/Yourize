import React from 'react';

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
            <div className="relative mt-10 px-4 sm:px-6 lg:px-8">
                <img
                    src="./img/linebox.png"
                    alt=""
                    className="z-10 max-h-[500px] absolute left-0 object-cover w-full opacity-30"
                />
                <div className="h-[500px] flex items-center justify-center flex-col gap-5 z-50 relative text-center">
                    <h1 className="linear_gradient text-4xl sm:text-5xl lg:text-7xl font-normal z-50">
                        Our Offerings
                    </h1>
                    <p className="text_color2 mt-4 max-w-4xl">
                        Everything you need to grow your financial advisory practice — in one place. Yourize delivers
                        powerful branding, effortless automation, client education, and a thriving community so you
                        can focus on what matters most: serving your clients and building trust.
                    </p>
                </div>
            </div>

            {/* Offerings Cards */}
            <div className="flex flex-wrap items-start justify-center mt-12 px-4 sm:px-6 lg:px-8 gap-10">
                {OurOfferingsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-full sm:w-[300px] md:w-[326px] border border-[#FAC817] rounded-[38px] overflow-hidden relative bg-black shadow-lg px-4 py-6 h-[540px] boxswdobox_shadow4"
                    >
                        <div className="absolute w-full max-h-[190px]">
                            <img
                                src="./img/linebox.png"
                                alt=""
                                className="z-10 object-cover w-full opacity-30"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mt-4">
                            <div className="w-[90%] h-[147px] border border-[#FAC817] rounded-2xl flex items-center justify-center relative z-50">
                                <img src={item.image} alt={item.title} className="object-contain h-[100px]" />
                                <div className="absolute top-0 h-[50%] w-full rounded-t-2xl opacity-40 blur-sm z-0 bg-[#FAC817]"></div>
                            </div>
                        </div>
                        <h2 className="text-center text-xl sm:text-2xl font-medium text_color mt-6">
                            {item.title}
                        </h2>
                        <div className="mt-4 space-y-3">
                            {item.description.map((point, idx) => (
                                <p key={idx} className="text_color2 text-sm sm:text-base text-center z-50">
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
