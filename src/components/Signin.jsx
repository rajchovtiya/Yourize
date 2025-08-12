import React from "react";
import { useForm } from "react-hook-form";

export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const demoUser = "user";
        const demoEmail = "user@example.com";
        const demoPass = "123456";

        if (
            (data.username === demoUser || data.username === demoEmail) &&
            data.password === demoPass
        ) {
            alert("✅ Sign-In Successful! Redirecting to User Dashboard...");
            window.location.href = "/dashboard";
        } else {
            alert("❌ Invalid Username/Email or Password");
        }
    };

    const handleForgotPassword = () => {
        alert("🔐 Redirecting to password reset page...");
        window.location.href = "/forgot-password";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

                {/* Title */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="./img/userlogo.png"
                        alt="User Logo"
                        className="w-20 h-20 object-contain mb-2"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
                    <p className="text-gray-500 text-sm mt-1">Access your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Username / Email */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-2">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username or email"
                            {...register("username", { required: "Username or Email is required" })}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition ${errors.username ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="block text-gray-600 text-sm mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" },
                            })}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Forgot Password */}
                    <div className="mb-6 text-right">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-sm text-purple-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 shadow-md hover:shadow-lg transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                {/* Sign Up Link */}
                {/* <div className="mt-4 text-center">
                    <a
                        href="/signup"
                        className="text-sm text-purple-600 hover:underline hover:text-purple-800 transition"
                    >
                        New here? Create an account
                    </a>
                </div> */}
            </div>
        </div>
    );
}
