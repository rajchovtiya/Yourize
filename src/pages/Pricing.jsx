import React, { useEffect } from 'react'
import Pricinggrow from '../commponets/Pricinggrow'
import PricingChat from '../commponets/PricingChat'

function Pricing({ setNavabr ,setFromslow }) {
    useEffect(() => {
        setNavabr('gdf')
    }, )
    return (
        <div>
            <Pricinggrow />
            <PricingChat setFromslow={setFromslow} />
        </div>
    )
}

export default Pricing
