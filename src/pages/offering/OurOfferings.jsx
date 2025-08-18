import React from 'react';

const OurOfferingsData = [
    {
        id: 1,
        image: "./img/box1.png",
        title: "Brand ",
        title2: "& Marketing Resources",
        description: [
            "High-quality images & videos ready for your social media posts",
            "Regional language marketing content to connect with local investors",
            "Customised sales proposals & presentations for client meetings",
            "Personal branding videos to showcase your expertise",
            "Professionally designed introductory decks to win client confidence",
        ],
    },
    {
        id: 2,
        image: "./img/box2.png",
        title: "Social Media ",
        title2: " Management",
        description: [
            "End-to-end social media handling – we create, post & engage for you",
            "Targeted ad campaigns to generate quality investor leads",
            "Investor awareness posts (SIP benefits, MF myths, retirement planning etc.)",
            "Festive & occasion-based content to connect with clients personally",
            "Monthly performance reports so you know what’s working",
        ],
    },
    {
        id: 3,
        image: "./img/box3.png",
        title: "Website ",
        title2: "Development",
        description: [
            "Modern UI/UX design that makes you look professional and trustworthy",
            "Domain, hosting & SSL included for complete peace of mind",
            "Dynamic & mobile-friendly website built for Indian investors",
            "Showcase your services & expertise with a personal distributor website",
            "Regular maintenance & updates so your website stays fresh",
        ],
    },
    {
        id: 4,
        image: "./img/box4.png",
        title: "Logo",
        title2: "Design",
        description: [
            "A professional logo that reflects your brand identity",
            "Multiple design concepts to choose from",
            "Clean, modern and finance-industry aligned designs",
            "Logo delivered in all formats (social, print, website use)",
            "Builds trust & recall value for your brand"
        ],
    },
    {
        id: 5,
        image: "./img/box5.png",
        title: "Events ",
        title2: "Workshops",
        description: [
            "Exclusive access to industry seminars & conferences",
            "Discounts & complimentary passes for paid events",
            "Investor education workshops under your own brand name",
            "Networking opportunities with top MFDs & experts",
            "Learn latest marketing & business growth strategies"
        ],
    },
];

function OurOfferings() {
    return (
        <div>
            {/* Header Section */}
            <div className="relative mt-10 px-4 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url('./img/linebox.png')` }}
                ></div>
                <div className="h-[300px] md:h-[400px] flex items-center justify-center flex-col gap-5 z-50 relative text-center">
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
                        className="w-full sm:w-[300px] md:w-[340px] border border-[#FAC817] rounded-[38px] overflow-hidden relative bg-black shadow-lg px-5 py-6  boxswdobox_shadow4 h-[620px]"
                    >
                        <div className="absolute w-full max-h-[190px] ">
                            <img
                                src="./img/linebox.png"
                                alt=""
                                className="z-10 object-cover w-full opacity-30"
                            />
                        </div>
                        <div className="w-full flex items-center justify-center mt-4">
                            <div className="w-[90%] h-[147px] border border-[#FAC817] rounded-2xl flex items-center justify-center relative z-50 boxborders">
                                <img src={item.image} alt={item.title} className="object-contain h-[100px]" />
                                <div className="absolute top-0 h-[50%] w-full rounded-t-2xl opacity-40 blur-sm z-0 bg-[#FAC817]"></div>
                            </div>
                        </div>
                        <h2 className="text-center text-xl sm:text-2xl font-medium text_color mt-6">
                            {item.title}
                        </h2>
                        <h2 className="text-center text-xl sm:text-2xl font-medium text-[#9F7F10] mb-6 ">
                            {item.title2}
                        </h2>
                        <div className="mt-4 space-y-3">
                            {item.description.map((point, idx) => (
                                <p key={idx} className="text_color2 text-sm sm:text-base text-center z-50 opacity-100 font-light">
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
