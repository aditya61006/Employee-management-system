

import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Login = ({value}) => {
    const {setUser,setEmployeeDta}  = value
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const authData = useContext(AuthContext);

    const submithandler = (e)=>{
        e.preventDefault()

        if (email == "admin@me.com" && password == "321") {
            console.log("you are admin")
            setUser("Admin")
            localStorage.setItem("logInUser", "Admin")
        }
        else  if (authData){
            const employee =  authData.employeesData.find((emp)=>email == emp.email && emp.password == password )
            console.log(employee)
            if (employee) {
                setUser("Employee")
                setEmployeeDta(employee)
                localStorage.setItem("employeedta", JSON.stringify( employee))
                localStorage.setItem("logInUser","Employee")
            }
        }
        else{
            alert("Invalid Credentials")
        }

        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className='relative z-10 w-full max-w-md'>
                <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl animate-fadeInUp'>
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2'>
                            Welcome Back
                        </h1>
                        <p className='text-gray-400 text-sm'>
                            Sign in to access your dashboard
                        </p>
                    </div>

                    <form onSubmit={submithandler} className='space-y-6'>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-300'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                    placeholder='Enter your email'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                    <svg className='h-5 w-5 text-gray-400' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="password" className='block text-sm font-medium text-gray-300'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                    placeholder='Enter your password'
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white transition-colors duration-200"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between text-sm'>
                            <label className='flex items-center space-x-2 text-gray-300'>
                                <input
                                    type="checkbox"
                                    className='rounded  bg-white/5 border-white/10 text-purple-600 focus:ring-purple-500 focus:ring-offset-0'
                                />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className='text-purple-400 hover:text-purple-300 transition-colors duration-200'>
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className='w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-300'
                        >
                            Sign In
                        </button>

                        <div className='text-center'>
                            <p className='text-gray-400 text-sm'>
                                Don't have an account?{' '}
                                <a href="#" className='text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200'>
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </form>

                 
                 
                </div>
            </div>
        </div>
    );
}

export default Login;