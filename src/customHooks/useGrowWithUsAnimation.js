// hooks/useGrowWithUsAnimation.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useGrowWithUsAnimation(sectionRef, cardsRef) {
    useEffect(() => {
        if (!sectionRef.current) return;

        // Heading animation
        gsap.fromTo(
            sectionRef.current.querySelectorAll(".section-heading"),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Card animation
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: index * 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 30%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, [sectionRef, cardsRef]);
}
