import React from 'react';

function BookDemo({ props, setFromslow }) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
            {/* Background line image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('./img/linebox.png')` }}
            ></div>

            {/* Main content */}
            <div className="min-h-[200px] sm:min-h-[400px] flex items-center justify-center flex-col gap-5 relative z-10">
                <div className="w-full max-w-4xl px-2 text-center">
                    <h1 className="text_color2 text-3xl sm:text-4xl lg:text-6xl font-normal">
                        {props}
                    </h1>
                </div>

                {/* Decorative circular background */}
                <div className="absolute rounded-full bookdemo w-[200px] h-[200px] z-[-1] opacity-10"></div>

                {/* Button */}
                <div
                    onClick={() => setFromslow(true)}
                    className="bg-white text-black py-2 px-7 rounded-xl text-sm sm:text-base mt-8 shadow-md hover:shadow-lg transition cursor-pointer"
                >
                    Book Demo
                </div>
            </div>
        </div>
    );
}

export default BookDemo;
