import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function useClientOnboardingForm(fromslow, setFromslow) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);

        const payload = {
            ...data,
            access_key: "05256a79-564d-4120-b056-1a1de1a98153",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
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

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        show,
        handleClose,
        isLoading,
        showSuccess,
        setShowSuccess
    };
}
