import Link from "next/link";




export default function Navbar() {
    return (
        <nav className="bg-gray-400">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
                <div className="flex items-center">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Social Network</p>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="/login" className="text-xl sm:text-2xl underline hover:text-black/50 transition duration-300">Login</Link>
                    <Link href="/register" className="text-xl sm:text-2xl underline hover:text-black/50 transition duration-150">Register</Link>
                </div>
            </div>
        </nav>
    )
}