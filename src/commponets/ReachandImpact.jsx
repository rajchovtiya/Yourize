import React from 'react';

function ReachandImpact() {
    return (
        <section className="bg-black text-white py-20 px-4 md:px-10 relative  overflow-hidden h-auto">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-15 z-0">
                <img
                    src="/img/linebox.png"
                    alt="Pattern background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative  max-w-7xl mx-auto text-center  ">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 linear_gradient">
                    Our Reach and Impact
                </h2>

                <div className='relative h  gap-8 rounded-[50px]'>
                    <div className='w-full bg-[#FAC817] opacity-30 blur-sm rounded-[50px] h-full absolute top-0'></div>

                    <div className='flex justify-center md:justify-between items-center gap-6 md:gap-4 p-6 h-full  relative flex-wrap'>

                        {/* Box 1 */}
                        <div className='w-full sm:w-[45%] lg:w-[225px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl  z-50'>100+</h1>
                            <p className='opacity-35 mt-6 z-50'>Experts</p>
                            <p className='opacity-35 z-50'>helped</p>
                        </div>

                        {/* Box 2 */}
                        <div className='w-full sm:w-[45%] lg:w-[325px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl z-50'>500+</h1>
                            <p className='opacity-35 mt-6 z-50'>Marketing creatives</p>
                            <p className='opacity-35 z-50'>made</p>
                        </div>

                        {/* Box 3 */}
                        <div className='w-full sm:w-[45%] lg:w-[325px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl z-50'>5 CR+</h1>
                            <p className='opacity-35 mt-6 z-50'>New SIP campaigns</p>
                            <p className='opacity-35 z-50'>Supported</p>
                        </div>

                        {/* Box 4 */}
                        <div className='w-full sm:w-[45%] lg:w-[225px] border-2 border-[#FAC817] rounded-2xl flex flex-col items-start justify-center bg-black px-10 py-10 h-[341px]'>
                            <h1 className='linear_gradient text-6xl z-50'>90%</h1>
                            <p className='opacity-35 mt-6 z-50'>Satisfaction and</p>
                            <p className='opacity-35 z-50'>Renewal rate</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md:block absolute bottom-0 w-full left-0 bg-[#050208] z-10 h-[300px] md:top-[90%] xl:top-[80%] boxbottom'></div>
        </section>
    );
}

export default ReachandImpact;
