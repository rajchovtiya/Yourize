import React from 'react';

function ReachandImpact() {
    return (
        <section className="bg-black text-white py-20 px-4 md:px-10 relative z-10 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-15 z-0">
                <img
                    src="/img/linebox.png"
                    alt="Pattern background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center  ">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 linear_gradient">
                    Our Reach and Impact
                </h2>

                <div className='relative h-auto md:h-[400px] gap-8 rounded-[50px]'>
                    <div className='w-full bg-[#FAC817] opacity-30 blur-sm rounded-[50px] h-full absolute top-0'></div>

                    <div className='flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 p-6 h-full z-10 relative'>

                        {/* Box 1 */}
                        <div className='w-full sm:w-[45%] lg:w-[225px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl'>100+</h1>
                            <p className='opacity-35 mt-6'>Experts</p>
                            <p className='opacity-35'>helped</p>
                        </div>

                        {/* Box 2 */}
                        <div className='w-full sm:w-[45%] lg:w-[325px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl'>500+</h1>
                            <p className='opacity-35 mt-6'>Marketing creatives</p>
                            <p className='opacity-35'>made</p>
                        </div>

                        {/* Box 3 */}
                        <div className='w-full sm:w-[45%] lg:w-[325px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl'>5 CR+</h1>
                            <p className='opacity-35 mt-6'>New SIP campaigns</p>
                            <p className='opacity-35'>Supported</p>
                        </div>

                        {/* Box 4 */}
                        <div className='w-full sm:w-[45%] lg:w-[225px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl'>90%</h1>
                            <p className='opacity-35 mt-6'>Satisfaction and</p>
                            <p className='opacity-35'>Renewal rate</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:block absolute bottom-0 w-full left-0 bg-[#050208] z-50 h-[300px] top-[80%] boxbottom'></div>
        </section>
    );
}

export default ReachandImpact;
