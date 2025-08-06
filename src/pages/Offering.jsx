import React, { useEffect } from 'react'
import OurOfferings from '../commponets/OurOfferings'
import BookDemo from '../commponets/BookDemo'

function Offering({ props, setNavabr ,setFromslow }) {
    useEffect(() => {
        setNavabr('gdf')
    }, )

    return (
        <div>
            <OurOfferings />
            <div className='padding mt-20'>
                <div className='border border-[#FAC817] rounded-[20px] overflow-hidden'>
                    <BookDemo props={props} setFromslow={setFromslow} />
                </div>
            </div>
        </div>
    )
}

export default Offering
