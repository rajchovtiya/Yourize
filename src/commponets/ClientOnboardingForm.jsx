import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ClientOnboardingForm({ fromslow, setFromslow }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);

    const onSubmit = async (data) => {
        console.log("Form submitted:", data);

        const payload = {
            ...data,
            access_key: "05256a79-564d-4120-b056-1a1de1a98153"
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await res.json();

            if (result.success) {
                console.log("Success", result);
                reset(); // reset form
            } else {
                console.error("Submission failed", result);
            }
        } catch (err) {
            console.error("Error submitting form", err);
        }
    };

    useEffect(() => {
        if (fromslow) {
            setTimeout(() => setShow(true), 100);
        } else {
            setShow(false);
        }
    }, [fromslow]);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => setFromslow(false), 200);
    };

    return (
        <>
            {fromslow && (
                <div className={`fixed inset-0 w-full z-[300] min-h-screen flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 overflow-y-auto ${show ? "block" : "hidden"}`}>
                    <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('./img/linebox.png')` }}></div>

                    <div className={`relative z-10 w-full max-w-4xl transition-all duration-500 ease-in-out transform ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

                        {/* Close Button */}
                        <div className="flex justify-end mb-2">
                            <button
                                onClick={handleClose}
                                className="text-white text-2xl font-bold bg-black px-3 py-1 rounded hover:text-yellow-400 transition"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-center">
                            <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-6 bg-black border border-[#FAC817] rounded-full px-6 sm:px-10 py-2 shadow-yellow-500 shadow-md w-[400px] h-[53px]">
                                Book Demo For Free
                            </h2>
                        </div>

                        {/* Form Box */}
                        <div className="bg-white rounded-[30px] px-6 sm:px-8 py-6 sm:py-8 border border-white/20 backdrop-blur-md shadow-yellow-400 shadow-md">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
                                {/* Input Fields */}
                                {["name", "contact", "email"].map((field, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute left-4 top-3 bg-black rounded h-[33px] w-[96px] flex items-center justify-center">
                                            <label className="text-yellow-400 text-sm font-bold">
                                                {field === "name" ? "Name" : field === "contact" ? "Contact" : "Mail"}
                                            </label>
                                        </div>
                                        <input
                                            {...register(field, {
                                                required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                                                ...(field === "email" && {
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/, message: "Invalid email address"
                                                    }
                                                })
                                            })}
                                            placeholder={
                                                field === "name"
                                                    ? "Your Name Here"
                                                    : field === "contact"
                                                        ? "Your Phone Number Here"
                                                        : "Your E-mail Here"
                                            }
                                            className="w-full pl-36 py-4 rounded bg-transparent border border-[#554A26] text-black placeholder-black outline-none"
                                        />
                                        {errors[field] && (
                                            <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                                                {errors[field].message}
                                            </p>
                                        )}
                                    </div>
                                ))}

                                {/* Role Dropdown */}
                                <div className="relative">
                                    <div className="absolute left-4 top-3 bg-black rounded h-[33px] w-[120px] flex items-center justify-center">
                                        <label className="text-yellow-400 text-sm font-bold">I am</label>
                                    </div>

                                    <select
                                        {...register("role", { required: "Please select an option" })}
                                        className="w-full pl-36 py-4 rounded bg-white border border-black text-black outline-none appearance-none transition duration-300 ease-in-out focus:ring-2 focus:border-black"
                                        defaultValue=""
                                    >
                                        <option value="" disabled hidden>Select Your Role</option>

                                        <optgroup label="Professionals">
                                            <option value="mutual_fund_distributor" className="bg-white text-black">Mutual Fund Distributor</option>
                                            <option value="investment_advisor" className="bg-white text-black">Registered Investment Advisor</option>
                                            <option value="insurance_agent" className="bg-white text-black">Insurance Agent</option>
                                            <option value="financial_planner" className="bg-white text-black">Certified Financial Planner</option>
                                        </optgroup>

                                        <optgroup label="Organizations">
                                            <option value="family_office" className="bg-white text-black">Family Office</option>
                                            <option value="fintech_startup" className="bg-white text-black">Fintech Startup</option>
                                        </optgroup>

                                        <optgroup label="Other">
                                            <option value="other" className="bg-white text-black">Other (Please specify in the message)</option>
                                        </optgroup>
                                    </select>

                                    {errors.role && (
                                        <p className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
                                            {errors.role.message}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* Submit Button */}
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
            )}
        </>
    );
}
