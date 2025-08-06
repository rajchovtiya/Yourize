import React, { useEffect } from 'react'
import HomeHarder from '../commponets/HomeHarder'
import Graph from '../commponets/Graph'
import Growth from '../commponets/Growth'
import GrowWithUs from '../commponets/GrowWithUs'
import Financial from '../commponets/Financial'
import Clients from '../commponets/Clients'
import FAQ from '../commponets/FAQ'
import BookDemo from '../commponets/BookDemo'
import ClientOnboardingForm from '../commponets/ClientOnboardingForm'

function Home({ props, setNavabr }) {
  useEffect(() => {
    setNavabr('Navshadow')
  },)
  return (
    <div>
      <HomeHarder />
      <Graph />
      <Growth />
      <GrowWithUs />
      <Financial />
      <Clients />
      <FAQ />
      <BookDemo props={props} />
    </div>
  )
}

export default Home
