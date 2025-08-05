import React from 'react'
import OurOfferings from '../commponets/OurOfferings'
import BookDemo from '../commponets/BookDemo'

function Offering({ props }) {
    console.log(props)
    return (
        <div>
            <OurOfferings />
            <div className='padding mt-20'>
                <div className='border border-[#FAC817] rounded-[20px] overflow-hidden'>
                    <BookDemo props={props} />
                </div>
            </div>
        </div>
    )
}

export default Offering
