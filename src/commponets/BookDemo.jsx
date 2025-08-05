import React from 'react'

function BookDemo({ props }) {
    console.log(props)
    return (
        <div className='padding  relative overflow-hidden'>
            <div className='padding absolute left-0 w-full'>
                <img src="./img/linebox.png" alt="" className='z-10 max-h-[580px]  object-cover w-full opacity-30' />
            </div>
            <div className='h-[500px] flex items-center justify-center flex-col gap-5 z-50 relative'>
               <div className='w-[900px]'><h1 className='text_color2 text-6xl text-wra text-center font-normal z-50'>{props}</h1></div>
               <div className='absolute rounded-[50%] bookdemo z-10'></div>
               <button className='bg-white py-1.5 px-5 rounded-3xl mt-11'>Book Demo</button>
            </div>

        </div>
    )
}

export default BookDemo
