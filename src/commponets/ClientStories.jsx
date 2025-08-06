import React from "react";

export default function ClientStories() {
    const cards = [
        {
            title: "Real Client Stories",
            subtitle: "From Confusion to Confidence",
            description:
                "They helped me brand my business and set up digital campaigns. I now get leads every week – all without chasing!",
            services: "Brand Kit, WhatsApp Campaigns",
            images: "Office board, social post sample, WhatsApp creative",
            image: "./img/selfie2.png", // Replace with actual path
        },
        {
            title: "Real Client Stories",
            subtitle: "Anjali Investments – Nashik",
            description:
                "Earlier, no one knew me. Now my Instagram and website do the talking. I’m finally seen as a professional!",
            services: "Website, Reels, Insta Creatives",
            images: "Instagram grid, reel screenshot",
            image: "./img/selfie.png", // Replace with actual path
        },
    ];

    return (
        <div className="min-h-screen bg-black z-50 flex flex-col md:flex-row items-center justify-around gap-20 px-6 py-16 mt-12 padding">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="w-[490px] rounded-3xl z-50 p-6 overflow-hidden bg-black text-white shadow-xl relative"
                    style={{
                        boxShadow: "0 0 35px 10px rgba(250, 204, 21, 0.5)", // Yellow glow around full card
                    }}
                >
                    <h2 className="text-4xl font-bold text-center z-50">{card.title}</h2>
                    <p className="text-gray-300 text-center italic mb-4 z-50">{card.subtitle}</p>

                    <div className="flex justify-center mb-4">
                        <img
                            src={card.image}
                            alt="Client"
                            className="object-contain drop-shadow-xl rounded-md max-w-[300px]"
                        />
                    </div>

                    <p className="text-sm mb-4">{card.description}</p>

                    <ul className="text-sm text-gray-300 list-disc ml-5 space-y-1">
                        <li>
                            <strong>Services Used:</strong> {card.services}
                        </li>
                        <li>
                            <strong>Images:</strong> {card.images}
                        </li>
                    </ul>

                    <div className="absolute top-[10%] w-full h-[28%] bg-[#FAC817] blur-[100px] left-0 rounded-3xl  z-[-1]"></div>
                </div>
            ))}
        </div>
    );
}
