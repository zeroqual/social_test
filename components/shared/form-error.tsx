import { FieldError } from "react-hook-form";



interface FormFieldError {
    error?: FieldError | { message?: string }
}

export default function FormError({ error }: FormFieldError) {
    if (!error?.message) return null

    return (
        <p className="text-sm text-center text-red-600 sm:text-md md:text-lg lg:text-xl">
            {error.message}
        </p>
    )
}