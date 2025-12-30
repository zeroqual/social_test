import z from "zod";
import { LoginFormSchema, RegisterFormSchema } from "./auth-client-schemas";





export type RegisterFormProps = z.infer<typeof RegisterFormSchema>
export type LoginFormProps = z.infer<typeof LoginFormSchema>