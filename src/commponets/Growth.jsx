import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GrowtHData = [
    {
        id: 1,
        image: "./img/Growth.png",
        text1: "Low visibility in",
        text2: "a market full of",
        text3: "noise?"
    },
    {
        id: 2,
        image: "./img/Growth.png",
        text1: "Struggling to",
        text2: "attract and convert",
        text3: "new clients?"
    },
    {
        id: 3,
        image: "./img/Growth.png",
        text1: "No time, team, or ",
        text2: "tech to focus on",
        text3: "marketing?"
    },
    {
        id: 4,
        image: "./img/Growth.png",
        text1: "Growth feels stuck,",
        text2: "Banks & Fintech ",
        text3: "dominate the space?"
    },
    {
        id: 5,
        image: "./img/Growth.png",
        text1: "Complex, fast-",
        text2: "changing financial ",
        text3: "landscape?"
    }
];

function Growth() {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((el) => {
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }, []);

    return (
        <div className='padding mt-28'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-5xl font-normal text-white text-center'>What’s Holding You Back from</h1>
                <h1 className='text-[3.75rem] font-normal linear_gradient text-center'>Growing?</h1>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-center gap-36 xl:gap-5 mt-8">
                {GrowtHData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="flex flex-col justify-center items-center md:max-w-[360px] w-full p-4"
                    >
                        <img src={item.image} alt="" className="max-w-[80px] drop_shadow4" />
                        <p className="text_color2 text-[20px] font-light mt-4">{item.text1}</p>
                        <p className="text_color2 text-[20px] font-light">{item.text2}</p>
                        <p className="text_color2 text-[20px] font-light">{item.text3}</p>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center mt-20'>
                <img src="./img/arrow.png" alt="" />
            </div>
        </div>
    );
}

export default Growth;
