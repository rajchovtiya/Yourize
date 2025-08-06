import React, { useRef, useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

// GALLERY DATA
const galleryItems1 = [
    { img: "./img/gallery1.jpg", },
    { img: "./img/gallery2.jpg", },
    { img: "./img/gallery3.jpg", },
    { img: "./img/gallery1.jpg", },
    { img: "./img/gallery2.jpg", },
    { img: "./img/gallery3.jpg", },
];

const galleryItems2 = [
    { img: "./img/gallery4.jpg" },
    { img: "./img/gallery5.jpg" },
    { img: "./img/gallery6.jpg" },
    { img: "./img/gallery4.jpg" },
    { img: "./img/gallery5.jpg" },
    { img: "./img/gallery6.jpg" },
];

// REUSABLE SCROLLABLE GALLERY ROW
const ScrollableGalleryRow = ({ items }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className={`overflow-x-auto scrollbar-hide px-4 mb-12 cursor-${isDragging ? "grabbing" : "grab"
                }`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="flex gap-6 snap-x snap-mandatory">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] bg-[#111111] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 snap-start"
                    >
                        <img
                            src={item.img}
                            alt={`Work ${index + 1}`}
                            className="w-full h-80 object-cover"
                        />
                        {/* <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex gap-2">
                                    <a href="https://www.instagram.com/yourize.in/?igsh=MW5menNkbzBkMWI3bQ%3D%3D&utm_source=ig_contact_invite#">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61579010946823&rdid=2bQKKCnhAyB3YdZl#">
                                        <FaFacebookF />
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// MAIN COMPONENT
export default function Gallery() {
    return (
        <div className="bg-black text-white py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
                Gallery –{" "}
                <span className="text-yellow-400">Our Work in Action</span>
            </h2>

            {/* First Scroll Row */}
            <ScrollableGalleryRow items={galleryItems1} />

            {/* Second Scroll Row */}
            <ScrollableGalleryRow items={galleryItems2} />
        </div>
    );
}
