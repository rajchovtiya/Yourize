import React, { useEffect } from 'react'
import OurWorksAdvisors from '../commponets/OurWorksAdvisors'
import ClientStories from '../commponets/ClientStories'
import Gallery from '../commponets/Gallery'
import ReachandImpact from '../commponets/ReachandImpact'
import BookDemo from '../commponets/BookDemo'

function OurWorks({ props, setNavabr }) {
    useEffect(() => {
        setNavabr('gdf')
    }, )
    return (
        <div>
            <OurWorksAdvisors />
            <ClientStories />
            <Gallery />
            <ReachandImpact />
            <div className='padding mt-20'>
                <div className='border border-[#FAC817] rounded-[20px] overflow-hidden'>
                    <BookDemo props={props} />
                </div>
            </div>        </div>
    )
}

export default OurWorks
