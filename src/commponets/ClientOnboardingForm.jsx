import React from "react";
import { useForm } from "react-hook-form";

export default function ClientOnboardingForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center flex-col py-10 px-4"
            style={{
                backgroundImage: `url('./img/linebox.png')`,
            }}
        >
            {/* Heading */}
            <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-8 mt-5 bg-black border border-[#FAC817] rounded-full px-6 sm:px-20 py-2">
                Client Onboarding Form
            </h2>

            {/* Form Container */}
            <div className="bg-gradient-to-b from-[#80660D] to-[#231C03] rounded-[30px] px-6 sm:px-8 py-6 sm:py-8 w-full max-w-[900px] flex flex-col justify-between border border-[#FAC817]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">

                    {/* Name */}
                    <div className="relative">
                        <div className="absolute left-4 top-3 bg-black rounded px-4 py-1">
                            <label className="text-yellow-400 text-sm font-bold">Name</label>
                        </div>
                        <input
                            {...register("name", { required: "Name is required" })}
                            placeholder="Your Name Here"
                            className="w-full pl-28 py-4 rounded bg-transparent border border-[#554A26] text-white outline-none"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="relative">
                        <div className="absolute left-4 top-3 bg-black rounded px-4 py-1">
                            <label className="text-yellow-400 text-sm font-bold">Contact</label>
                        </div>
                        <input
                            {...register("contact", { required: "Phone number is required" })}
                            placeholder="Your Phone Number Here"
                            className="w-full pl-28 py-4 rounded bg-transparent border border-[#554A26] text-white outline-none"
                        />
                        {errors.contact && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.contact.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <div className="absolute left-4 top-3 bg-black rounded px-4 py-1">
                            <label className="text-yellow-400 text-sm font-bold">Mail</label>
                        </div>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email",
                                },
                            })}
                            placeholder="Your E-mail Here"
                            className="w-full pl-28 py-4 rounded bg-transparent border border-[#554A26] text-white outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Dropdown */}
                    <div className="relative">
                        <div className="absolute left-4 top-3 bg-black rounded px-4 py-1">
                            <label className="text-yellow-400 text-sm font-bold">I am</label>
                        </div>
                        <select
                            {...register("role", { required: "Please select an option" })}
                            className="w-full pl-28 py-4 rounded bg-transparent border border-[#554A26] text-white outline-none appearance-none"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Select Here</option>
                            <option value="client" className="bg-black text-yellow-600">Client</option>
                            <option value="partner" className="bg-black text-yellow-600">Partner</option>
                            <option value="other" className="bg-black text-yellow-600">Other</option>
                        </select>
                        {errors.role && (
                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{errors.role.message}</p>
                        )}
                    </div>
                </form>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8 w-full">
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-white text-black font-bold py-4 px-10 rounded-xl hover:bg-yellow-300 transition mt-4"
                    onClick={handleSubmit(onSubmit)}
                >
                    Book Demo
                </button>
            </div>
        </div>
    );
}
