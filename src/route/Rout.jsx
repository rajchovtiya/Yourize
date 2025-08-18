import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";
import Offering from "../pages/offering/Offering";
import Pricing from "../pages/pricing/Pricing";
import OurWorks from "../pages/ourworks/OurWorks";
import ClientOnboardingForm from "../components/ClientOnboardingForm";
import { useState } from "react";
// import MasterAdmin from "../pages/masterAdmin/MasterAdmin";
// import BusinessAdmin from "../pages/businessAdmin/BusinessAdmin";
// import ForgotPassword from "../components/ForgotPassword";
// import AdminLayout from "../pages/adminLayout/AdminLayoutall";
// import AdminLayoutall from "../pages/adminLayout/AdminLayoutall";

function Rout() {
    const [navabr, setNavabr] = useState('Navshadow');
    const [fromslow, setFromslow] = useState(false);

    return (
        <>
            <Navbar navabr={navabr} setFromslow={setFromslow} />
            <ClientOnboardingForm fromslow={fromslow} setFromslow={setFromslow} />

            <Routes>
                {/* Public Pages */}
                <Route path="/" element={<Outlet />}>
                    <Route index element={
                        <Home setNavabr={setNavabr} setFromslow={setFromslow} />
                    } />
                    <Route path="offering" element={
                        <Offering setNavabr={setNavabr} setFromslow={setFromslow} />
                    } />
                    <Route path="pricing" element={
                        <Pricing setNavabr={setNavabr} setFromslow={setFromslow} />
                    } />
                    <Route path="ourworks" element={
                        <OurWorks setNavabr={setNavabr} setFromslow={setFromslow} />
                    } />
                </Route>

                {/* Admin Pages */}
                {/* <Route path="/adminLayout" element={<AdminLayoutall />}>
                    <Route index element={<MasterAdmin />} />
                    <Route path="businessAdmin" element={<BusinessAdmin />} />
                    <Route path="forgotPassword" element={<ForgotPassword />} />
                </Route> */}
            </Routes>

            <Footer setFromslow={setFromslow} />
        </>
    );
}

export default Rout;
