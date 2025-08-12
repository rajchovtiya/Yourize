import React, { useEffect } from 'react'
import Pricinggrow from './Pricinggrow'
import PricingChart from './PricingChat'

function Pricing({ setNavabr, setFromslow }) {
    useEffect(() => {
        setNavabr('gdf')
    },)
    return (
        <div>
            <Pricinggrow />
            <PricingChart setFromslow={setFromslow} />
        </div>
    )
}

export default Pricing
