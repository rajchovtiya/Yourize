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

  return (
    <>
      <Navbar navabr={navabr} />
      <Routes>
        <Route path="/" element={<Home props={"Let’s grow your business together — book a call now."} setNavabr={setNavabr} />} />
        <Route path="/offering" element={<Offering props={"Join hundreds of advisors growing with Yourize. Schedule your demo today."} setNavabr={setNavabr}/>} />
        <Route path="/Pricing" element={<Pricing setNavabr={setNavabr} />} />
        <Route path="/OurWorks" element={<OurWorks props={'We’d love to work with you – no matter where you’re starting from.'} setNavabr={setNavabr} />} />
        <Route path="/ClientOnboardingForm" element={<ClientOnboardingForm  setNavabr={setNavabr}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
