import React, { useEffect } from 'react'
import OurOfferings from './OurOfferings'
import BookDemo from '../../components/BookDemo'

function Offering({ setNavabr ,setFromslow }) {
    useEffect(() => {
        setNavabr('gdf')
    }, )

    return (
        <div>
            <OurOfferings />
            <div className='padding mt-20'>
                <div className='border border-[#FAC817] rounded-[20px] overflow-hidden'>
                    <BookDemo  props="Join hundreds of advisors growing with Yourize. Schedule your demo today." setFromslow={setFromslow} />
                </div>
            </div>
        </div>
    )
}

export default Offering
