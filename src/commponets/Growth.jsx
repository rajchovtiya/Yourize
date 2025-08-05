import React from 'react'

const GrowtHData = [
    {
        id: 1,
        image: "./img/Growth.png",
        text1: "Low visibility in",
        text2: "a market full of",
        text3: "noise?"

    },
    {
        id: 2,
        image: "./img/Growth.png",
        text1: "Struggling to",
        text2: "attract and convert",
        text3: "new clients?"
    },
    {
        id: 3,
        image: "./img/Growth.png",
        text1: "No time, team, or ",
        text2: "tech to focus on",
        text3: "marketing?"
    },
    {
        id: 4,
        image: "./img/Growth.png",
        text1: "Growth feels stuck,",
        text2: "Banks & Fintech ",
        text3: "dominate the space?"
    },
    {
        id: 5,
        image: "./img/Growth.png",
        text1: "Complex, fast-",
        text2: "changing financial ",
        text3: "landscape?"
    }


]
function Growth() {
    return (
        <div className='padding mt-36'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className=' text-6xl font-normal text-white'>What’s Holding You Back from</h1>
                <h1 className=' text-6xl font-normal linear_gradient'>Growing?</h1>
            </div>
            <div className="flex flex-wrap justify-center xl:justify-between gap-20 xl:gap-5 mt-16">
                {GrowtHData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-start items-start max-w-[250px] p-4"
                    >
                        <img src={item.image} alt="" className="max-w-[140px] drop_shadow4" />
                        <p className="text_color2 text-[20px] mt-12">{item.text1}</p>
                        <p className="text_color2 text-[20px]">{item.text2}</p>
                        <p className="text_color2 text-[20px]">{item.text3}</p>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center mt-20'>
                <img src="./img/arrow.png" alt="" />
            </div>
        </div>
    )
}

export default Growth
