import React from 'react';

function BookDemo({ props }) {
    console.log(props);
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
            {/* Background line image */}
            <div className="absolute left-0 w-full z-0">
                <img
                    src="./img/linebox.png"
                    alt=""
                    className="max-h-[580px] object-cover w-full opacity-30"
                />
            </div>

            {/* Main content */}
            <div className="min-h-[300px] sm:min-h-[400px] flex items-center justify-center flex-col gap-5 relative z-10">
                <div className="w-full max-w-4xl px-2 text-center">
                    <h1 className="text_color2 text-3xl sm:text-4xl lg:text-6xl font-normal">
                        {props}
                    </h1>
                </div>

                {/* Decorative circular background */}
                <div className="absolute rounded-full bookdemo w-[300px] h-[300px] z-0 opacity-10"></div>

                {/* Button */}
                <button className="bg-white text-black py-2 px-6 rounded-full text-sm sm:text-base mt-8 shadow-md hover:shadow-lg transition">
                    Book Demo
                </button>
            </div>
        </div>
    );
}

export default BookDemo;
