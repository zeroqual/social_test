"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterFormSchema } from "../auth-client-schemas";
import { RegisterFormProps } from "../auth-client-types";
import FormError from "@/components/shared";





export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
        resolver: zodResolver(RegisterFormSchema)
    })

    const onSubmit = async (unsafeData: RegisterFormProps) => {
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
            <FormError error={errors.email} />
            <input
                type="text"
                placeholder="Enter name"
                {...register("name")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <FormError error={errors.name} />
            <input
                type="text"
                placeholder="Enter surname"
                {...register("surname")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <FormError error={errors.surname} />
            <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <FormError error={errors.password} />
            <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="outline-none border border-gray-300 rounded-xl px-2 py-2 text-sm sm:text-md md:text-xl lg:text-xl bg-gray-100"
            />
            <FormError error={errors.confirmPassword} />
            <button type="submit" className="bg-blue-300 rounded-xl px-10 py-2 self-center cursor-pointer hover:bg-blue-300/50 transition duration-300">Register</button>
        </form>
    )
}