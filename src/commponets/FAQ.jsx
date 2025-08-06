import React, { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is Yourize and who is it for?",
        answer:
            "Yourize is a growth platform built exclusively for Mutual Fund Distributors, Independent Financial Advisors, RIAs, CFPs, Insurance Agents, and Family Offices to help them grow their business with branding, marketing, and automation tools.",
    },
    {
        id: 2,
        question: "I don’t have any marketing experience. Can I still use Yourize?",
        answer:
            "Yes! Yourize is built for all experience levels, with tools and support to help you market effectively.",
    },
    {
        id: 3,
        question: "How will Yourize help me get more clients?",
        answer:
            "By automating marketing and improving brand visibility, Yourize helps attract and convert potential clients.",
    },
    {
        id: 4,
        question: "Is this suitable for small or solo advisors?",
        answer:
            "Absolutely. Yourize is designed to work for individual advisors as well as teams.",
    },
    {
        id: 5,
        question: "What do I get in the demo call?",
        answer:
            "A full walkthrough of features, use cases, and how Yourize can work specifically for your business.",
    },
    {
        id: 6,
        question: "Can you work with existing design or development frameworks?",
        answer:
            "Yes. Yourize can integrate with your existing branding or digital tools.",
    },
    {
        id: 7,
        question: "How does Yourize charge for its services?",
        answer:
            "We offer tiered pricing based on the tools and services you use. Contact us for custom pricing.",
    },
    {
        id: 8,
        question: "How long do I have to wait to hear back from you?",
        answer: "Usually within 24–48 hours after your inquiry.",
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id); // Toggle current box
    };

    return (
        <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mt-20 mb-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-400 mb-10 text-sm sm:text-base">
                    Still have any questions? Contact our team via{" "}
                    <span className="underline break-words">hello@protip.com</span>
                </p>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-700">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className="border-b border-gray-700 py-4 mt-6 cursor-pointer transition-all duration-300"
                            onClick={() => toggleFAQ(item.id)}
                        >
                            <div className="flex items-start gap-4 sm:items-center">
                                {/* Number Badge */}
                                <div
                                    className={`text-sm font-semibold rounded-md px-3 py-1 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${openId === item.id
                                        ? "border-2 border-[#FAC817] text-[#FAC817]"
                                        : "bg-[#1a1a1a] text-white"
                                        }`}
                                >
                                    {item.id < 10 ? `0${item.id}` : item.id}
                                </div>

                                {/* Question + Answer */}
                                <div className="flex-1">
                                    <div
                                        className={`text-base font-semibold leading-snug ${openId === item.id ? "text-yellow-400" : ""
                                            }`}
                                    >
                                        {item.question}
                                    </div>

                                    {/* Answer */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openId === item.id ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-sm sm:text-base text-gray-300">{item.answer}</p>
                                    </div>
                                </div>

                                {/* Toggle Icon */}
                                <div className="ml-2 text-yellow-400 text-2xl font-bold">
                                    {openId === item.id ? "×" : "+"}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Background Line Image */}
                    <img
                        src="./img/Line1(1).png"
                        alt=""
                        className="absolute hidden  lg:block top-0 left-1/2 transform -translate-x-1/2 h-full w-auto max-w-xs sm:max-w-sm md:max-w-md opacity-20 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}
