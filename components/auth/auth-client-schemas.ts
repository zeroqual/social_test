import z from "zod";






export const RegisterFormSchema = z.strictObject({
    email: z.email(),
    name: z.string().min(2, "Name length is too low").max(10, "Name length is too big"),
    surname: z.string().min(2, "Surname length is too low").max(10, "Surname length is too big"),
    password: z.string().min(2, "Password length is too low").max(16, "Password length is too big"),
    confirmPassword: z.string()
}).refine((data) => data.confirmPassword === data.password, {
    error: "Passwords don't match",
    path: ["confirmPassword"]
})


export const LoginFormSchema = z.strictObject({
    email: z.email(),
    password: z.string().min(2, "Password length is too low").max(16, "Password length is too big"),
})