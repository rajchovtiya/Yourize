import React from 'react'

function Pricinggrow() {
    return (
        <div className='relative mt-10'>
            <img
                src="./img/linebox.png"
                alt=""
                className="absolute left-0 top-0 w-full max-h-[400px] object-cover opacity-30 z-10"
            />

            <div className='relative z-50 flex flex-col items-center justify-center w-full h-[auto] min-h-[300px] px-4 md:px-0 py-10 md:py-0'>
                <h1 className='text_color2 text-4xl md:text-7xl linear_gradient text-center leading-tight'>
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
