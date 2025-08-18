import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { MdCheck } from "react-icons/md";

const plans = [
    {
        name: 'Kickstart',
        price: 'INR 2400/- per year',
        features: ['8 / month (Hindi & English)', '4 (English only)', false, false, "20 / month", false, false, false, false, 'true( Full access)', false, false, true, true, true, true],
    },
    {
        name: 'Elite',
        price: 'INR 5000/- per year',
        features: ["12 / month (Multi-language)", "6 (English + AI content)", true, true, "50 / month", true, false, false, true, 'true( Full access)', "true(Discount on passes)", "true(Limited access)", true, true, true, true],
    },
    {
        name: 'Legacy',
        price: 'INR 10000/- per year',
        features: ['20 / month (Multi-language)', '10 (Multi-language + AI content)', true, true, '100 / month', true, 'true( 1 per quarter)', 'true(Included)', true, "true(Full access)", 'true(2 Complimentary passes + Discounts)', 'true(Priority access)', true, true, true, true],
    },
    // {
    //     name: 'Legacy',
    //     price: 'INR 50000/- per year',
    //     features: ['15', '8', 'Multi Language', true, true, true, true, true, true, true, '4+', true, true, true, true, true, true, true, 'true(Dedicated)', true, true, true, true, true, true, true, true, true],
    // },
];

const featureList = [
    'Social Media Images',
    'Videos',
    'AI-Generated Content',
    'Multi-Language Content',
    'Proposal Creator',
    'Introductory Deck / Presentation',
    'Personal Branding Video',
    'Video Voiceover',
    'Weekly Insights (White-label)',
    'Webinars & Seminars (Free)',
    'Paid Events',
    'Offline Events & Workshop Access',
    'Online Workshops',
    'Learning Content',
    'Yourize Community Access',
    'Admin Panel Access'
];

const PricingChart = ({ setFromslow }) => {
    const [selectedPlan, setSelectedPlan] = useState('Elite');

    return (
        <div className="mt-16 bg-black text-white w-full p-0 md:px-5 py-5 overflow-x-auto">
            <div className="min-w-[900px] md:min-w-full">
                <table className="w-full border-separate border-spacing-0">
                    <thead>
                        <tr>
                            <th className="p-4 text-left sticky top-0 left-0 z-20 bg-black w-64"></th>
                            {plans.map((plan, index) => {
                                const isSelected = selectedPlan === plan.name;
                                return (
                                    <th
                                        key={index}
                                        className={`p-4 sticky top-0 z-20 bg-black text-center font-semibold text-sm min-w-[200px] ${isSelected ? 'bg-[#2A2103]' : 'bg-black'
                                            }`}
                                    >
                                        <div className="flex flex-col gap-2 items-center">
                                            <span>{plan.name}</span>
                                            <button
                                                onClick={() => {
                                                    setSelectedPlan(plan.name);
                                                    setFromslow?.(true);
                                                }}
                                                className={`text-xs px-6 py-2 rounded-md border font-semibold ${isSelected
                                                    ? 'border-[#c7ad4d] bg-[#FAC817] text-black hover:bg-[#e9bb14]'
                                                    : 'border-gray-400 bg-white/10 text-white hover:bg-white/20'
                                                    }`}
                                            >
                                                Get Started
                                            </button>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Price row */}
                        <tr>
                            <td className="p-4 text-left sticky left-0 bg-black border-b border-white/10 z-20">
                                Price
                            </td>
                            {plans.map((plan, i) => {
                                const isSelected = selectedPlan === plan.name;
                                return (
                                    <td
                                        key={i}
                                        className={`p-4 text-center border-b border-white/10 ${isSelected ? 'bg-[#2A2103]' : 'bg-black opacity-80'
                                            }`}
                                    >
                                        {plan.price}
                                    </td>
                                );
                            })}
                        </tr>

                        {/* Features row by row */}
                        {featureList.map((feature, index) => (
                            <tr key={index}>
                                <td className="p-4 text-left text-sm bg-black border-b border-white/10 sticky left-0 z-10">
                                    {feature}
                                </td>
                                {plans.map((plan, i) => {
                                    const value = plan.features[index];
                                    const isSelected = selectedPlan === plan.name;

                                    let content;
                                    if (value === true) {
                                        content = <MdCheck className="text-white text-xl mx-auto" />;
                                    } else if (value === false) {
                                        content = <IoMdClose className="text-white text-xl mx-auto" />;
                                    } else if (typeof value === 'string' && value.startsWith('true(')) {
                                        const text = value.match(/true\((.*?)\)/)?.[1] || '';
                                        content = (
                                            <div className="flex items-center justify-center gap-1 text-sm">
                                                <MdCheck className="text-white text-xl" />
                                                <span>{text}</span>
                                            </div>
                                        );
                                    } else {
                                        content = <span className="text-sm">{value}</span>;
                                    }

                                    return (
                                        <td
                                            key={i}
                                            className={`p-2 text-center border-b border-white/10 ${isSelected ? 'bg-[#2A2103]' : 'bg-black'
                                                }`}
                                        >
                                            {content}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingChart;
