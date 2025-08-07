import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ClientOnboardingForm({ fromslow, setFromslow }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);

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
                reset();
                setTimeout(() => {
                    setShow(false);
                    setIsLoading(false);
                    setShowSuccess(true);
                }, 1000);
            } else {
                console.error("Submission failed", result);
                setIsLoading(false);
            }
        } catch (err) {
            console.error("Error submitting form", err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (fromslow) setTimeout(() => setShow(true), 100);
        else setShow(false);
    }, [fromslow]);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => setFromslow(false), 200);
    };

    return (
        <>
            {/* FORM MODAL */}
            {fromslow && (
                <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 ${show ? "block" : "hidden"}`}>
                    <div className={`relative max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl transition-transform transform ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
                        {/* Close */}
                        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold">
                            &times;
                        </button>

                        {/* Header */}
                        <h2 className="text-center text-2xl sm:text-3xl font-bold text-black mb-6">
                            Book Your Free Demo
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Inputs */}
                            {[
                                { name: "name", label: "Full Name", placeholder: "John Doe" },
                                { name: "contact", label: "Contact", placeholder: "+91-9876543210" },
                                { name: "email", label: "Email", placeholder: "john@example.com" }
                            ].map(({ name, label, placeholder }) => (
                                <div key={name}>
                                    <label className="block mb-1 font-medium text-gray-700">{label}</label>
                                    <input
                                        {...register(name, {
                                            required: `${label} is required`,
                                            ...(name === "email" && {
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Invalid email address"
                                                }
                                            })
                                        })}
                                        placeholder={placeholder}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                                    />
                                    {errors[name] && (
                                        <p className="text-sm text-red-500 mt-1">{errors[name].message}</p>
                                    )}
                                </div>
                            ))}

                            {/* Dropdown */}
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">I am a</label>
                                <select
                                    {...register("role", { required: "Please select your role" })}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition bg-white"
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden>Select your role</option>
                                    <optgroup label="Professionals">
                                        <option value="mutual_fund_distributor">Mutual Fund Distributor</option>
                                        <option value="investment_advisor">Registered Investment Advisor</option>
                                        <option value="insurance_agent">Insurance Agent</option>
                                        <option value="financial_planner">Certified Financial Planner</option>
                                    </optgroup>
                                    <optgroup label="Organizations">
                                        <option value="family_office">Family Office</option>
                                        <option value="fintech_startup">Fintech Startup</option>
                                    </optgroup>
                                    <optgroup label="Other">
                                        <option value="other">Other (Specify in message)</option>
                                    </optgroup>
                                </select>
                                {errors.role && (
                                    <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 rounded-lg font-semibold transition ${isLoading
                                        ? "bg-yellow-300 text-black cursor-not-allowed opacity-70"
                                        : "bg-yellow-400 text-black hover:bg-yellow-500"
                                        }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                            </svg>
                                            Submitting...
                                        </div>
                                    ) : (
                                        "Submit"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ✅ Success Dialog */}
            {showSuccess && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center animate-fadeIn">
                        <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Thank You!</h2>
                        <p className="text-gray-800 mb-6">Your enquiry has been submitted. Our team will connect with you soon.</p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
