import { z } from "zod";
export const registerSchema = z
    .object({
    name: z
        .string({ message: "Name is required." })
        .min(3, { message: "Name must contain 3 charecters." }),
    email: z.string({ message: "Email is required." }),
    password: z
        .string({ message: "Password is required." })
        .min(7, { message: "Password must contain 7 charecters." }),
    confirm_password: z
        .string({ message: "Confirm Password is required." })
        .min(7, { message: "Name must contain 7 charecters." }),
})
    .refine((data) => data.password === data.confirm_password, {
    message: "Confirm password not matched",
    path: ["confirm_password"],
});
