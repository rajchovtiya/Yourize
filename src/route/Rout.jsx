import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";
import Offering from "../pages/offering/Offering";
import Pricing from "../pages/pricing/Pricing";
import OurWorks from "../pages/ourworks/OurWorks";
import ClientOnboardingForm from "../components/ClientOnboardingForm";
import { useState } from "react";
import AdminLayout from "../pages/AdminLayout/AdminLayout";
import MasterAdmin from "../pages/masterAdmin/MasterAdmin";
import BusinessAdmin from "../pages/businessAdmin/BusinessAdmin";

function Rout() {
    const [navabr, setNavabr] = useState('Navshadow');
    const [fromslow, setFromslow] = useState(false);

    return (
        <>
            <Navbar navabr={navabr} setFromslow={setFromslow} />
            <ClientOnboardingForm fromslow={fromslow} setFromslow={setFromslow} />

            <Routes>
                <Route path="/" element={<Outlet />}>

                    <Route
                        path="/"
                        element={
                            <Home
                                setNavabr={setNavabr}
                                setFromslow={setFromslow}
                            />
                        }
                    />
                    <Route
                        path="/offering"
                        element={
                            <Offering
                                setNavabr={setNavabr}
                                setFromslow={setFromslow}
                            />
                        }
                    />
                    <Route
                        path="/pricing"
                        element={
                            <Pricing
                                setNavabr={setNavabr}
                                setFromslow={setFromslow}
                            />
                        }
                    />
                    <Route
                        path="/ourworks"
                        element={
                            <OurWorks
                                setNavabr={setNavabr}
                                setFromslow={setFromslow}
                            />
                        }
                    />
                </Route>
                <Route path="/adminPanel" element={<AdminLayout />}>
                    <Route index element={<MasterAdmin />} />
                    <Route path="businessAdmin" element={<BusinessAdmin />} />
                </Route>

            </Routes>

            <Footer setFromslow={setFromslow} />
        </>
    );
}

export default Rout;
