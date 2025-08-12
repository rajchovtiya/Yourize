import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useAdminLogin } from "../customHooks/useAdminLogin";

export default function Adminlogin() {
    const { register, handleSubmit } = useForm();
    const { validateLogin } = useAdminLogin();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const result = validateLogin(data);

        if (!result.success) {
            result.error.errors.forEach((err) => {
                toast.error(`❌ ${err.message}`, { position: "top-center" });
            });
            return;
        }

        toast.success("✅ Login Successful! Redirecting...", {
            position: "top-center",
            autoClose: 2000,
        });

        setTimeout(() => {
            window.location.href = "/admin";
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                {/* Logo & Title */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="./img/adminlogo.png"
                        alt="Admin Logo"
                        className="w-20 h-20 object-contain mb-2"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                        Login to <span className="text-blue-600">Yourize</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Please enter your credentials to access the admin panel.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Username OR Email */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username or email"
                            {...register("username")}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border-gray-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3 relative">
                        <label className="block text-gray-600 text-sm mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...register("password")}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border-gray-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                            ) : (
                                <EyeIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-right">
                        <NavLink
                            to="/ForgotPassword"
                            className="text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
                        >
                            Forgot Password?
                        </NavLink>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>

            {/* Toast container */}
            <ToastContainer />
        </div>
    );
}
