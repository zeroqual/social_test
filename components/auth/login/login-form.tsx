"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "../auth-client-schemas";
import { LoginFormProps } from "../auth-client-types";
import FormError from "@/components/shared";





export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
        resolver: zodResolver(LoginFormSchema)
    })

    const onSubmit = async (unsafeData: LoginFormProps) => {
        console.log(unsafeData)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <input
                type="email"
                placeholder="Enter email"
                {...register("email")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <FormError error={errors.password} />
            <button type="submit" className="bg-blue-300 rounded-xl px-10 py-2 self-center cursor-pointer hover:bg-blue-300/50 transition duration-300">Login</button>
        </form>
    )
}