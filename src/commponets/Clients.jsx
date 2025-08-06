import React from 'react';

function Clients() {
    return (
        <div className='px-4 md:px-10 lg:px-20 mt-20 md:mt-32'>
            {/* Header Section */}
            <div className='flex flex-col items-center text-center'>
                <h1 className='text_color2 text-3xl md:text-4xl lg:text-5xl font-semibold'>Our clients</h1>
                <p className='text_color2 mt-3 font-light text-sm md:text-base'>
                    Hear firsthand how our solutions have
                </p>
                <p className='text_color2 font-light text-sm md:text-base'>
                    boosted online success for users like you.
                </p>
            </div>

            {/* Testimonial Section */}
            <div className='relative flex flex-col lg:flex-row items-center justify-evenly mt-20 gap-10'>
                {/* Left Client Image */}
                <div className='relative'>
                    <img
                        src="./img/Clients.jpg"
                        alt="Client"
                        className='w-40 md:w-52 lg:w-[250px] rounded-3xl shadow6 object-cover'
                    />
                    <img
                        src="./img/Line1(1).png"
                        alt="Decorative Line"
                        className='hidden lg:block absolute  top-[-20%] left-[104%] '
                    />
                    <img
                        src="./img/Line1(1).png"
                        alt="Decorative Line"
                        className='hidden lg:block absolute top-[-20%] left-[-4%] '
                    />
                </div>


                {/* Middle Testimonial Text */}
                <div className='text-center lg:text-left'>
                    <h1 className='text_color2 text-xl md:text-2xl lg:text-3xl leading-tight'>
                        “Managing leads, sending <br />
                        campaigns, and building trust <br />
                        is effortless with Yourize.”
                    </h1>
                    <h4 className='text_color2 mt-4 md:mt-6 text-base md:text-lg font-medium'>
                        Ankush Singh
                    </h4>
                    <p className='text_color2 opacity-45 text-sm md:text-base'>
                        Mutual Funds Distributor, Goa
                    </p>
                </div>

                {/* Background lines – positioned absolutely */}

                <img
                    src="./img/Line 3.png"
                    alt="Top Decorative"
                    className='hidden lg:block absolute top-[-3%] left-0 w-full'
                />
                <img
                    src="./img/Line 3.png"
                    alt="Bottom Decorative"
                    className='hidden lg:block absolute bottom-[-3%] left-0 w-full'
                />
            </div>
        </div>
    );
}

export default Clients;
