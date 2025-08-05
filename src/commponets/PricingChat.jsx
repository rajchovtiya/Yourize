import React from 'react';

const plans = [
    {
        name: 'Kickstart',
        price: 'INR 8500/yr',
        features: ['4', 'English + Hindi', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],
    },
    {
        name: 'Growth',
        price: 'INR 12500/yr',
        features: ['8', 'Multi Language', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️'],
    },
    {
        name: 'Elite',
        price: 'INR 22500/yr',
        features: ['12', 'Multi Language', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️'],
    },
    {
        name: 'Legacy',
        price: 'INR 30999/yr',
        features: ['8', 'Multi Language', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️', '✔️'],
    },
];

const featureList = [
    'Marketing Collaterals (Images/Month)',
    'Languages Supported',
    'AI-Generated Content',
    'Video Voiceover',
    'Social Media Management',
    'Financial Calculators',
    'Sales Proposal Tool',
    'Lead Management System (CRM)',
    'Task & Event Management System',
    'Blogs & Articles (Real Estate)',
    'Email & WhatsApp Marketing Setup',
    'Referral & Poster Campaign Creator',
    'Custom Campaign Builder',
    'Exclusive Webinars & Masterclass',
    'Class Integration',
    'Social Research & Real Research',
];

const PricingChat = () => {
    return (
        <div className="overflow-x-auto p-4 mt-12 bg-black text-white padding">
            <div className='border border-white/10 py-[2%] px-[4%] rounded-2xl'>
                <table className="min-w-full border-separate border-spacing-0 rounded-lg ">
                    <thead>
                        <tr>
                            <th className="p-4 text-left w-64 bg-black border-b border-white/10"></th>
                            {plans.map((plan, index) => (
                                <th
                                    key={index}
                                    className={`p-4 text-center font-semibold border-b border-white/10
                                    ${plan.name === 'Growth' ? 'bg-[#e4c041] text-black' : 'bg-white/3 text-white'}`}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <span>{plan.name}</span>
                                        <button
                                            className={`text-xs px-6 py-2 rounded-2xl border font-medium
                                            ${plan.name === 'Growth'
                                                    ? 'border-[#c7ad4d] bg-[#FAC817]  text-white'
                                                    : 'border-gray-300 bg-white/10 text-white hover:bg-white/20'}`}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Price row */}
                        <tr>
                            <td className="p-4 text-left text-sm bg-black font-medium border-b border-white/10">Price</td>
                            {plans.map((plan, i) => (
                                <td
                                    key={i}
                                    className={`p-4 text-center font-semibold border-b border-white/10
                                    ${plan.name === 'Growth' ? 'bg-[#e4c041] text-black' : 'bg-white/3 text-white'}`}
                                >
                                    {plan.price}
                                </td>
                            ))}
                        </tr>

                        {/* Features */}
                        {featureList.map((feature, index) => (
                            <tr key={index}>
                                <td className="p-4 text-left text-sm bg-black border-b border-white/10">{feature}</td>
                                {plans.map((plan, i) => (
                                    <td
                                        key={i}
                                        className={`p-4 text-center border-b border-white/10
                                        ${plan.name === 'Growth' ? 'bg-[#e4c041] text-black' : 'bg-white/3 text-white'}`}
                                    >
                                        {plan.features[index]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingChat;
