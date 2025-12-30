

interface Props {
    children: React.ReactNode
}


export default function AuthLayout({ children }: Props) {
    return (
        <main className="bg-linear-to-br from-purple-100 to-blue-200 flex flex-1">
            {children}
        </main>
    )
}