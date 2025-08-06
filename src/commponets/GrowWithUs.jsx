import React from 'react';

const GrowWithUsData = [
    {
        id: 1,
        icon: "./img/Icon1.png",
        title: "Marketing ",
        title2: "& Branding",
        description: [
            "Get your own website and branding kit",
            "Get your own brand marketing creatives with your name & logo",
            "Access ready-to-use WhatsApp, SMS & email campaigns/ Templates",
            "Get Social media management services to increase your reach"
        ],
        note: "Get Whatsapp & mail setup in admin panel",
    },
    {
        id: 2,
        icon: "./img/Icon2.png",
        title: "Lead Management",
        title2: "& Exclusive Tools",
        description: [
            "Add, manage & track all your leads in one place",
            "Get alerts and reminders to follow up on time",
            "Use AI Powered tools to calculate goal, returns, and for sales proposal creation.",
            "Maintain client meeting notes and call records"
        ],
        note: "Get access to priority leads and referrals from the platform",
    },
    {
        id: 3,
        icon: "./img/Icon3.png",
        title: "Learn",
        title2: "& Grow",
        description: [
            "Access easy learning videos and guides (in Hindi & English)",
            "Attend live webinars with experts every month",
            "Learn about new products and how to sell them",
            "Get tips to handle client objections & increase AUM"
        ],
        note: "Join a community of top-performing advisors across India",
    }
];

function GrowWithUs() {
    return (
        <div className='padding mt-11'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-7xl text_color2 text-center'>Everything you need to Grow</h1>
                <h1 className='linear_gradient text-7xl mt-[20px] text-center'>All in One Platform</h1>
                <p className='text_color mt-8 font-light text-[20px] text-center'>
                    From branding to lead generation, automation to learning we have built Yourize to
                </p>
                <p className='text-center text_color font-light text-[20px]'>
                    support every part of your journey as a financial professional
                </p>
            </div>

            <div className='flex items-center md:items-center justify-center md:justify-between mt-10 flex-wrap gap-6'>
                {GrowWithUsData.map((item) => (
                    <div
                        key={item.id}
                        className="w-full md:w-[360px] h-[530px] pb-4 rounded-[20px] bg-[#000000] relative p-6 px-8 text-white 
                        shadow-lg overflow-hidden border border-[#FAC817] boxswdobox_shadow4"
                    >
                        {/* Large soft glow background */}
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
                        ].map((pos, index) => (
                            <div
                                key={index}
                                className="absolute w-[8px] h-[8px] bg-[#FAC817] blur-sm rounded-full opacity-80 z-10"
                                style={pos}
                            ></div>
                        ))}

                        {/* Icon */}
                        <div className="mx-auto mb-5 flex items-center justify-center text-yellow-400 text-xl z-10 relative">
                            <img src={item.icon} alt="" className='max-w-[70px]' />
                        </div>

                        <h2 className="text-center text-[25px] font-medium">{item.title}</h2>
                        <h2 className="text-center text-[22px] font-medium text-[#817D6E]">{item.title2}</h2>

                        <p className="text-center text-sm text-gray-400 mb-5 mt-5">{item.description[0]}</p>

                        <div className="space-y-4 text-sm text-white leading-relaxed text-center">
                            {item.description.slice(1).map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>

                        <p className="text-center text-yellow-400 text-sm mt-8">
                            {item.note}
                        </p>

                        {/* Decorative corner lines */}
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
