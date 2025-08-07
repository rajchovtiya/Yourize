import { Route, Routes } from "react-router-dom"
import Navbar from "./commponets/Navbar"
import Home from "./pages/Home"
import Footer from "./commponets/Footer"
import Offering from "./pages/Offering"
import Pricing from "./pages/Pricing"
import OurWorks from "./pages/OurWorks"
import ClientOnboardingForm from "./commponets/ClientOnboardingForm"
import { useState } from "react"

function App() {
  const [navabr, setNavabr] = useState('Navshadow')
  const [fromslow, setFromslow] = useState(false)
  console.log(fromslow)
  return (
    <>
      <Navbar navabr={navabr} setFromslow={setFromslow} />
      <ClientOnboardingForm fromslow={fromslow} setFromslow={setFromslow} />
      <Routes>
        <Route path="/" element={<Home props={"Let’s grow your business together — book a call now."} setNavabr={setNavabr} setFromslow={setFromslow}  />} />
        <Route path="/offering" element={<Offering props={"Join hundreds of advisors growing with Yourize. Schedule your demo today."} setNavabr={setNavabr} setFromslow={setFromslow} />} />
        <Route path="/Pricing" element={<Pricing setNavabr={setNavabr} setFromslow={setFromslow} />} />
        <Route path="/OurWorks" element={<OurWorks props={'We’d love to work with you – no matter where you’re starting from.'} setNavabr={setNavabr} setFromslow={setFromslow} />} />
      </Routes>
      <Footer setFromslow={setFromslow} />
    </>
  )
}

export default App
