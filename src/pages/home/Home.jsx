import React, { useEffect } from 'react'
import HomeHarder from './HomeHarder'
import Graph from './Graph'
import Growth from '../../components/Growth'
import GrowWithUs from './GrowWithUs'
import Financial from './Financial'
import Clients from './Clients'
import FAQ from './FAQ'
import BookDemo from '../../components/BookDemo'
import ClientOnboardingForm from '../../components/ClientOnboardingForm'

function Home({ setNavabr, setFromslow }) {
  useEffect(() => {
    setNavabr('Navshadow')
  },)
  return (
    <div>
      <HomeHarder setFromslow={setFromslow} />
      <Graph />
      <Growth />
      <GrowWithUs />
      <Financial />
      <Clients />
      <FAQ />
      <BookDemo props="Let’s grow your business together — book a call now." setFromslow={setFromslow} />
    </div>
  )
}

export default Home
