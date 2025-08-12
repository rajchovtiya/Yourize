// src/hooks/useAdminLogin.js
import { z } from "zod";

const adminUser = "admin";
const adminEmail = "admin@example.com";
const adminPass = "123456";

// Zod schema for login
const loginSchema = z.object({
    username: z.string().min(1, "Username/Email is required").refine(
        (val) => val === adminUser || val === adminEmail,
        { message: "Invalid Username or Email" }
    ),
    password: z.string().min(1, "Password is required").refine(
        (val) => val === adminPass,
        { message: "Invalid Password" }
    ),
});

export const useAdminLogin = () => {
    const validateLogin = (data) => {
        const result = loginSchema.safeParse(data);
        return result;
    };

    return { validateLogin };
};
