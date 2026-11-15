import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    function handleLogin(){
        if(email == "student@gmail.com" && password == "123"){
            localStorage.setItem("token","asdfda234sd")
            navigate("/")
        }else if(email == "admin@gmail.com" && password == "123"){
            localStorage.setItem("token","asdfda234sd")
            navigate("/admin")
        }
        
        
        else{
            alert("password or email incorrect")
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Form panel */}
            <main className="flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm">
                    <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Enter your email and password to access your account.
                    </p>

                    <form className="mt-8 space-y-5">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-700/15"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                                    Password
                                </label>
                                <a href="#" className="text-sm font-medium text-teal-800 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-3.5 pr-11 text-sm placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-700/15"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    aria-label="Show password"
                                    className="absolute inset-y-0 right-0 grid w-11 place-items-center text-slate-400 hover:text-slate-600 focus:outline-none focus-visible:text-teal-800"
                                >
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleLogin}
                            type="button"
                            className="w-full rounded-lg bg-teal-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-700/30"
                        >
                            Log In
                        </button>
                    </form>

                </div>
            </main>
        </div>
    );
}

