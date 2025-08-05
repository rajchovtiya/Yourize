import React from 'react'
// const stats = [
//     {
//         value: "100+",
//         label: "Experts helped",
//     },
//     {
//         value: "500+",
//         label: "Marketing creatives made",
//     },
//     {
//         value: "₹5 CR+",
//         label: "New SIP campaigns supported",
//     },
//     {
//         value: "90%",
//         label: "Satisfaction and Renewal rate",
//     },
// ];
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
            <div className="relative z-10 max-w-7xl mx-auto text-center padding">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 linear_gradient">
                    Our Reach and Impact
                </h2>
                <div className='relative h-[400px]  gap-8 rounded-[50px]'>
                    <div className='w-full bg-[#FAC817] opacity-30 blur-sm rounded-[50px] h-[100%]  absolute top-0'></div>
                    <div className='flex items-center justify-between p-6 gap-4 h-full z-10 relative '>
                        <div className='h-full w-[225px] border-2 border-[#FAC817] flex-col rounded-2xl flex items-start justify-center bg-black px-10'>
                            <h1 className='linear_gradient text-6xl'>100+</h1>
                            <p className='opacity-35 mt-6' >Experts</p>
                            <p className='opacity-35' >helped</p>
                        </div>
                        <div className='h-full w-[310px] border-2 border-[#FAC817] flex-col rounded-2xl flex items-start justify-center bg-black px-10'>
                            <h1 className='linear_gradient text-6xl'>500+</h1>
                            <p className='opacity-35 mt-6' >Marketing creatives</p>
                            <p className='opacity-35' >made</p>
                        </div>
                        <div className='h-full w-[310px] border-2 border-[#FAC817] flex-col rounded-2xl flex items-start justify-center bg-black px-10'>
                            <h1 className='linear_gradient text-6xl'>5 CR+</h1>
                            <p className='opacity-35 mt-6' >New SIP campaigns</p>
                            <p className='opacity-35' >Supported</p>
                        </div>
                        <div className='h-full w-[225px] border-2 border-[#FAC817] flex-col rounded-2xl flex items-start justify-center bg-black px-10'>
                            <h1 className='linear_gradient text-6xl'>90%</h1>
                            <p className='opacity-35 mt-6' >Satisfaction and</p>
                            <p className='opacity-35' >Renewal rate</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='absolute bottom-0 w-full left-0 bg-[#050208] z-50 h-[300px] top-[80%] boxbottom'></div>

        </section>
    )
}

export default ReachandImpact
