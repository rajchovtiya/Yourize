import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ClientOnboardingForm({ setNavabr }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };
    useEffect(() => {
        setNavabr('gdf')
    }, )
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black py-10 px-4 mt-16 overflow-hidden">
            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url('./img/linebox.png')` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Form content */}
            <div className="relative z-10 w-full max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-center">
                    <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-8 bg-black border border-[#FAC817] rounded-full px-6 sm:px-10 py-2 shadow-yellow-500 shadow-md w-[400px] h-[53px]">
                        Client Onboarding Form
                    </h2>
                </div>

                {/* Form box */}
                <div className="bg-[#DCDCDC] rounded-[30px] px-6 sm:px-8 py-6 sm:py-8 border border-white/20 backdrop-blur-md shadow-yellow-400 shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
                        {/* Form group template */}
                        {[
                            { label: "Name", name: "name", placeholder: "Your Name Here", rules: { required: "Name is required" } },
                            { label: "Contact", name: "contact", placeholder: "Your Phone Number Here", rules: { required: "Phone number is required" } },
                            {
                                label: "Mail",
                                name: "email",
                                placeholder: "Your E-mail Here",
                                rules: {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Invalid email address",
                                    },
                                },
                            },
                        ].map((field, index) => (
                            <div key={index} className="relative">
                                <div className="absolute left-4 top-3 bg-black rounded h-[33px] w-[96px] flex items-center justify-center">
                                    <label className="text-yellow-400 text-sm font-bold">{field.label}</label>
                                </div>
                                <input
                                    {...register(field.name, field.rules)}
                                    placeholder={field.placeholder}
                                    className="w-full pl-36 py-4 rounded bg-transparent border border-[#554A26] text-black placeholder-black outline-none"
                                />

                                {errors[field.name] && (
                                    <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                                        {errors[field.name]?.message}
                                    </p>
                                )}
                            </div>
                        ))}

                        {/* Role Dropdown */}
                        <div className="relative">
                            <div className="absolute left-4 top-3 bg-black rounded h-[33px] w-[96px] flex items-center justify-center">
                                <label className="text-yellow-400 text-sm font-bold">I am</label>
                            </div>
                            <select
                                {...register("role", { required: "Please select an option" })}
                                className="w-full pl-36 py-4 rounded bg-transparent border border-[#554A26] text-black outline-none appearance-none"
                                defaultValue=""
                            >
                                <option value="" disabled hidden>Select Here</option>
                                <option value="client" className="bg-black text-yellow-600">Client</option>
                                <option value="partner" className="bg-black text-yellow-600">Partner</option>
                                <option value="other" className="bg-black text-yellow-600">Other</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                                    {errors.role.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                    </form>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-white text-black font-bold py-4 px-10 rounded-xl hover:bg-yellow-300 transition mt-4"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Book Demo
                    </button>
                </div>

            </div>
        </div>
    );
}
