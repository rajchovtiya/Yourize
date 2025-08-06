import React from 'react';

function OurWorksAdvisors() {
    return (
        <div className="relative mt-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('./img/linebox.png')` }}
            ></div>

            {/* Content */}
            <div className="relative z-50 flex flex-col items-center justify-center w-full h-[450px] sm:h-[580px] px-4 sm:px-6 md:px-10 text-center">
                <h1 className="text_color2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Work That Speaks</h1>
                <h1 className="text_color2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">for Us – and for Our</h1>
                <h1 className="text_color2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold linear_gradient">
                    Advisors
                </h1>

                <div className="mt-5 sm:mt-7 space-y-1 sm:space-y-2 max-w-3xl">
                    <p className="text_color2 text-sm sm:text-base opacity-70">
                        Helping Advisors Grow, One Step at a Time. We don’t just offer services – we build lasting
                    </p>
                    <p className="text_color2 text-sm sm:text-base opacity-70">
                        success stories. From creating powerful personal brands to helping advisors attract and retain
                    </p>
                    <p className="text_color2 text-sm sm:text-base opacity-70">
                        clients, here’s how we’ve made a difference.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurWorksAdvisors;
