import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ArrowPathIcon } from "@heroicons/react/24/outline"; // refresh icon
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
    const [formData, setFormData] = useState({
        userId: "",
        pan: "",
        email: "",
        captcha: "",
        otpMethod: "email",
        rememberUserId: true,
    });

    // Generate a random captcha (6-digit)
    const generateCaptcha = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

    const handleRefreshCaptcha = () => {
        setCaptchaCode(generateCaptcha());
        setFormData({ ...formData, captcha: "" }); // clear input
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.userId || !formData.pan || !formData.email || !formData.captcha) {
            toast.error("❌ Please fill in all fields");
            return;
        }
        if (formData.captcha !== captchaCode) {
            toast.error("❌ Captcha does not match");
            return;
        }
        toast.success("✅ Reset link sent successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-200">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">↗</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
                    Forgot User ID or Password?
                </h2>

                {/* Radio buttons */}
                <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="rememberOption"
                            value="remember"
                            checked={formData.rememberUserId}
                            onChange={() => setFormData({ ...formData, rememberUserId: true })}
                            className="text-yellow-500 focus:ring-yellow-400"
                        />
                        <span>I remember my User ID</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="rememberOption"
                            value="forget"
                            checked={!formData.rememberUserId}
                            onChange={() => setFormData({ ...formData, rememberUserId: false })}
                            className="text-yellow-500 focus:ring-yellow-400"
                        />
                        <span>I forgot my User ID</span>
                    </label>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* User ID */}
                    <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        placeholder="User ID"
                        className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* PAN */}
                    <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        placeholder="PAN"
                        className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* OTP Method */}
                    <div className="mb-3 text-sm">
                        <span className="block mb-1 text-gray-600">Receive OTP on</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="otpMethod"
                                    value="email"
                                    checked={formData.otpMethod === "email"}
                                    onChange={handleChange}
                                    className="text-yellow-500 focus:ring-yellow-400"
                                />
                                Email
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="otpMethod"
                                    value="sms"
                                    checked={formData.otpMethod === "sms"}
                                    onChange={handleChange}
                                    className="text-yellow-500 focus:ring-yellow-400"
                                />
                                SMS
                            </label>
                        </div>
                    </div>

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail (as on account)"
                        className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* Captcha */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="relative bg-gray-50 p-2 rounded-lg border flex items-center justify-center w-28">
                            <span
                                className="text-green-700 font-bold text-lg tracking-widest select-none"
                                style={{
                                    textDecoration: "line-through",
                                    letterSpacing: "3px",
                                    fontFamily: "monospace",
                                }}
                            >
                                {captchaCode}
                            </span>
                            <button
                                type="button"
                                onClick={handleRefreshCaptcha}
                                className="absolute right-1 top-1 text-blue-500 hover:text-blue-700"
                            >
                                <ArrowPathIcon className="w-4 h-4" />
                            </button>
                        </div>

                        <input
                            type="text"
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            placeholder="Captcha"
                            className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Reset Button */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                        Reset
                    </button>
                </form>

                {/* Back to login */}
                <div className="text-center mt-4">
                    <a href="/login" className="text-sm text-gray-500 hover:underline">
                        Back to login
                    </a>
                </div>
            </div>

            {/* Toast */}
            <ToastContainer position="top-center" />
        </div>
    );
}
