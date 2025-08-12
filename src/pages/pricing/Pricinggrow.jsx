import React from 'react'

function Pricinggrow() {
    return (
        <div className='relative mt-2'>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: `url('./img/linebox.png')` }}
            ></div>

            <div className='relative z-50 flex flex-col items-center justify-center w-full h-[300px] min-h-[450px] px-4 md:px-0  md:py-0'>
                <h1 className='text_color2 text-[2.25rem] md:text-[4.25rem] linear_gradient text-center leading-tight'>
                    Pricing
                </h1>

                <div className="mt-6 space-y-2 text-center max-w-[700px]">
                    <p className='text_color2 text-sm md:text-base opacity-70'>
                        Everything you need to grow your financial advisory practice — in one place.
                        Yourize delivers
                    </p>
                    <p className='text_color2 text-sm md:text-base opacity-70'>
                        Powerful branding, effortless automation, client education, and a thriving
                        community so you
                    </p>
                    <p className='text_color2 text-sm md:text-base opacity-70'>
                        can focus on what matters most: serving your clients and building trust.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pricinggrow
