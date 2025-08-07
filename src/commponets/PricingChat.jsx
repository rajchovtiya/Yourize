import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { MdCheck } from "react-icons/md";

const plans = [
    {
        name: 'Kickstart',
        price: 'INR 6500/- per year',
        features: ['8', '4', 'English + Hindi', true, false, false, true, true, false, true, false, false, false, false, true, false, true, true, false, true, true, true, true, false, false, false, true, true],
    },
    {
        name: 'Growth',
        price: 'INR 12500/- per year',
        features: ['8', '4', 'Multi Language', true, true, true, true, true, true, true, '2', true, true, true, true, false, true, true, false, true, true, true, true, false, false, false, true, true],
    },
    {
        name: 'Elite',
        price: 'INR 22500/- per year',
        features: ['12', '6', 'Multi Language', true, true, true, true, true, true, true, '3', true, true, true, true, true, true, true, 'true(Shared Access)', true, true, true, true, false, false, false, true, true],
    },
    {
        name: 'Legacy',
        price: 'INR 50000/- per year',
        features: ['15', '8', 'Multi Language', true, true, true, true, true, true, true, '4+', true, true, true, true, true, true, true, 'true(Dedicated)', true, true, true, true, true, true, true, true, true],
    },
];

const featureList = [
    'Marketing Collaterals (Images/Month)',
    'Marketing Videos (Per Month)',
    'Languages Supported (Marketing)',
    'AI-Generated Content',
    'Video Voiceover',
    'Social Media Management',
    'Financial Calculators',
    'Sales Proposal Tool',
    'Lead Management System (CRM)',
    'Task & Event Management System',
    'Blogs & Articles (Per Month)',
    'Email & WhatsApp Marketing Setup',
    'Custom Campaign Builder',
    'Exclusive Webinars & Masterclasses',
    'Client Webinars by Industry Experts',
    'Offline Event & Workshop Access',
    'Email Templates for MF Research',
    'Dedicated Marketing Expert',
    'Admin Panel Access',
    'Learning Modules for MF Advisors',
    'MF Research Tools',
    'Sales Pitch Decks & Scripts',
    'Custom Website Creation',
    'Logo & Visual Identity Design',
    '2 Personal Branding Videos',
    'Weekly Market Insights',
    'Community Access-Yourize Circle'
];

const PricingChart = ({ setFromslow }) => {
    const [selectedPlan, setSelectedPlan] = useState('Growth');

    return (
        <div className="mt-16 bg-black text-white p-4">
            <div className="overflow-x-auto">
                <div className='border border-white/10 py-[2%] px-[4%] rounded-2xl min-w-[800px] sm:min-w-full'>
                    <table className="min-w-full border-separate border-spacing-0 rounded-lg">
                        <thead>
                            <tr>
                                <th className="p-4 text-left w-64 border-b border-white/10 sticky left-0 z-10 bg-black"></th>
                                {plans.map((plan, index) => {
                                    const isSelected = selectedPlan === plan.name;
                                    return (
                                        <th
                                            key={index}
                                            className={`p-4 text-2xl text-center font-normal border-b border-white/10
                                            sticky z-10 ${index === 0 ? 'left-[16rem]' : ''} 
                                            ${isSelected ? 'bg-[#2A2103]' : 'bg-black'}`}
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <span>{plan.name}</span>
                                                <button
                                                    onClick={() => {
                                                        setSelectedPlan(plan.name)
                                                        setFromslow(true)
                                                    }}
                                                    className={`text-xs px-12 py-3 rounded-xl border font-medium
                                                        ${isSelected
                                                            ? 'border-[#c7ad4d] bg-[#FAC817] text-black hover:bg-[#e9bb14]'
                                                            : 'border-gray-300 bg-white/10 text-white hover:bg-white/20'
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
                                <td className="p-4 text-left text-sm font-medium border-b border-white/10 sticky left-0 z-10 bg-black">
                                    Price
                                </td>
                                {plans.map((plan, i) => {
                                    const isSelected = selectedPlan === plan.name;
                                    return (
                                        <td
                                            key={i}
                                            className={`p-2 md:p-4 text-center font-normal border-b border-white/10
                                            ${isSelected ? 'bg-[#2A2103]' : 'bg-black text-white opacity-80'}`}
                                        >
                                            {plan.price}
                                        </td>
                                    );
                                })}
                            </tr>

                            {/* Feature rows */}
                            {featureList.map((feature, index) => (
                                <tr key={index}>
                                    <td className="p-3 md:p-4 text-left text-sm bg-black border-b border-white/10 sticky left-0 z-10">
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
                                                <div className="flex items-center justify-center gap-1">
                                                    <MdCheck className="text-white text-xl" />
                                                    <span className="text-sm">{text}</span>
                                                </div>
                                            );
                                        } else {
                                            content = <span className="text-sm">{value}</span>;
                                        }

                                        return (
                                            <td
                                                key={i}
                                                className={`p-2 md:p-4 text-center border-b border-white/10 text-wrap 
                                                ${isSelected ? 'bg-[#2A2103]' : 'bg-black text-white'}`}
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
        </div>
    );
};

export default PricingChart;
