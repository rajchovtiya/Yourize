import React, { useEffect } from 'react'
import OurWorksAdvisors from './OurWorksAdvisors'
import ClientStories from './ClientStories'
import Gallery from './Gallery'
import ReachandImpact from './ReachandImpact'
import BookDemo from '../../components/BookDemo'

function OurWorks({ setNavabr, setFromslow }) {
    useEffect(() => {
        setNavabr('gdf')
    },)
    return (
        <div>
            <OurWorksAdvisors />
            <ClientStories />
            <Gallery />
            <ReachandImpact />
            <div className='padding mt-20'>
                <div className='border border-[#FAC817] rounded-[20px] overflow-hidden'>
                    <BookDemo props="We’d love to work with you – no matter where you’re starting from." setFromslow={setFromslow} />
                </div>
            </div>        </div>
    )
}

export default OurWorks
