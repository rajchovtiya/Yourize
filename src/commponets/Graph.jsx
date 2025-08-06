import React from 'react';

function Graph() {
    return (
        <div className='mt-10 px-4 md:px-[5%] relative'>

            {/* Yellow Outer Box */}
            <div className='w-full bg-[#FAC817] rounded-[10px] max-w-full flex items-center justify-center 
                h-[400px] md:h-[600px] lg:h-[850px] relative z-50'>

                {/* Black Inner Box with Graph Image */}
                <div className='w-[98%] absolute rounded-[10px] top-[1.3%] bg-black 
                    h-[430px] md:h-[650px] lg:h-[900px] overflow-hidden'>
                    <img
                        src="./img/Graph.png"
                        alt="Graph"
                        className='w-full h-full rounded-[10px] '
                    />
                </div>
            </div>

            {/* Background Rings - Responsive & Layered */}
            {/* Ring 1 */}
            <div className='absolute top-[-15%] md:top-[-25%] lg:top-[-35%] w-full left-0 px-[5%] md:px-[8%] z-10'>
                <div className='w-full flex justify-center items-center'>
                    <img src="./img/Ring1.png" alt="Ring1"
                        className='w-full h-[400px] md:h-[700px] lg:h-[900px] drop_shadow' />
                </div>
            </div>

            {/* Ring 2 */}
            <div className='absolute top-[-10%] md:top-[-20%] lg:top-[-25%] w-full left-0 px-[10%] md:px-[17%] z-10'>
                <div className='w-full flex justify-center items-center'>
                    <img src="./img/Ring2.png" alt="Ring2"
                        className='w-full h-[400px] md:h-[700px] lg:h-[900px] drop_shadow' />
                </div>
            </div>

            {/* Ring 3 */}
            <div className='absolute top-[-5%] md:top-[-15%] lg:top-[-15%] w-full left-0 px-[15%] md:px-[25%] z-10'>
                <div className='w-full flex justify-center items-center'>
                    <img src="./img/Ring3.png" alt="Ring3"
                        className='w-full h-[400px] md:h-[700px] lg:h-[900px] drop_shadow2' />
                </div>
            </div>
        </div>
    );
}

export default Graph;
