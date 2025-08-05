import React from 'react'

function Clients() {
    return (
        <div className='padding mt-36'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text_color2 text-5xl'>Our clients</h1>
                <p className='text_color2 mt-5   font-light'>Hear firsthand how our solutions have </p>
                <p className='text_color2 mt-[2px]  font-light'>boosted online success for users like you.</p>
            </div>
            <div className='flex justify-evenly mt-32  gap-10 relative'>
                <img src="./img/Clients.jpg" alt="" className='max-w-[250px] rounded-3xl shadow6' />
                <div>
                    <h1 className='text_color2 text-3xl'>“Managing leads, sending </h1>
                    <h1 className='text_color2 text-3xl'>campaigns, and building trust</h1>
                    <h1 className='text_color2 text-3xl'>is effortless with Yourize.”</h1>
                    <h4 className='text_color2 mt-6'>Ankush Singh</h4>
                    <p className='text_color2 opacity-45'>Mutual Funds Distributor, Goa</p>
                </div>

                <img src="./img/Line1(1).png" alt="" className='absolute top-[-39%] left-[36%]' />
                <img src="./img/Line1(1).png" alt="" className='absolute top-[-39%] left-[14%]' />
                <img src="./img/Line 3.png" alt="" className='absolute top-[-3%] left-[0%] w-full' />
                <img src="./img/Line 3.png" alt="" className='absolute bottom-[-3%] left-[0%] w-full' />

            </div>
        </div>
    )
}

export default Clients
