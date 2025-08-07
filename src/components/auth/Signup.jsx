import React, { useState } from 'react';

const Signup = ({ onSignupSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        // Get employees from localStorage or empty array
        const employees = JSON.parse(localStorage.getItem('employees')) || [];

        // Check for duplicate email
        if (employees.some(emp => emp.email === email)) {
            setError('Email already exists!');
            return;
        }

        // Create new employee object
        const newEmployee = {
            name,
            email,
            password,
            tasks: [],
            taskCount: { completed: 0, active: 0, failed: 0, newTask: 0 }
        };

        // Add to employees array and save
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        // Optionally, you can auto-login or redirect
        if (onSignupSuccess) onSignupSuccess();

        // Clear form
        setName('');
        setEmail('');
        setPassword('');
        setError('');
        alert('Signup successful! You can now log in.');
    };

    return (
        <div className='min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='relative z-10 w-full max-w-md'>
                <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl animate-fadeInUp'>
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2'>
                            Create Account
                        </h1>
                        <p className='text-gray-400 text-sm'>
                            Sign up to join as an employee
                        </p>
                    </div>
                    <form onSubmit={handleSignup} className='space-y-6'>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-300'>
                                Name
                            </label>
                            <div className='relative'>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                    placeholder='Enter your name'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                    <svg className='h-5 w-5 text-gray-400' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-300'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                    placeholder='Enter your password'
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white transition-colors duration-200"
                                    onClick={() => setShowPassword(!showPassword)}
                                    tabIndex={-1}
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
                        {error && <div className="text-red-400 text-sm">{error}</div>}
                        <button
                            type="submit"
                            className='w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-300'
                        >
                            Sign Up
                        </button>
                        <div className='text-center'>
                            <p className='text-gray-400 text-sm'>
                                Already have an account?{' '}
                                <a href="#" onClick={onSignupSuccess} className='text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200'>
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;