"use client";
import { useState } from "react";
import { login } from "./actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [error, setError] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const res = await login(formData);
        if (res.success) {
            router.refresh();
        } else {
            setError(res.error || "Failed to login");
            setIsLoading(false);
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 text-black">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-100">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
                {error && <p className="mb-4 text-red-500 text-sm p-2 bg-red-50 rounded border border-red-100 text-center">{error}</p>}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors" 
                        required 
                        placeholder="••••••••"
                        autoFocus
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white font-medium p-2.5 rounded hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
