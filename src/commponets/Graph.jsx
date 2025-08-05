import React from 'react'

function Graph() {
    return (
        <div className='mt-10 padding relative'>
            <div className='w-full bg-[#FAC817] rounded-[10px] max-w-[100%] relative flex items-center justify-center h-[850px] z-50'>
                <div className='w-[99%] absolute rounded-[10px] top-[1.3%] bg-black h-[900px]'>
                    <img src="./img/Graph.png" alt="" className='h-full  rounded-[10px] w-[100%]' />
                </div>
            </div>

            <div className='absolute  top-[-35%] w-[100%] left-0 px-[8%] z-10'>
                <div className='w-full relative flex items-center justify-center'>
                    <img src="./img/Ring1.png" alt="" className='w-full h-[900px] drop_shadow' />
                </div>
            </div>
            <div className='absolute  top-[-25%] w-[100%] left-0 px-[17%] z-10'>
                <div className='w-full relative flex items-center justify-center'>
                    <img src="./img/Ring2.png" alt="" className='w-full h-[900px] drop_shadow' />
                </div>
            </div>
            <div className='absolute  top-[-15%] w-[100%] left-0 px-[25%] z-10'>
                <div className='w-full relative flex items-center justify-center'>
                    <img src="./img/Ring3.png" alt="" className='w-full h-[900px] drop_shadow2' />
                </div>
            </div>

        </div>
    )
}

export default Graph
