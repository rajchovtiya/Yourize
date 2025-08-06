import React, { useEffect } from 'react'
import Pricinggrow from '../commponets/Pricinggrow'
import PricingChat from '../commponets/PricingChat'

function Pricing({ setNavabr }) {
    useEffect(() => {
        setNavabr('gdf')
    }, )
    return (
        <div>
            <Pricinggrow />
            <PricingChat />
        </div>
    )
}

export default Pricing
