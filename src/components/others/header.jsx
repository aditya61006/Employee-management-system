import React from 'react';

const Header = ({setUser, data}) => {
    const LogoutHandler = () => {
        localStorage.removeItem("logInUser");
        localStorage.removeItem("employeedta");
        setUser(null);
    };

    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const currentDate = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <div className="w-full mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    {/* Left side - Greeting */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Hello, {data?.name ? data.name : "Admin"}! 👋
                                </h1>
                                <p className="text-gray-400 text-sm mt-1">
                                    Welcome back to your dashboard
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Time, Date and Logout */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {/* Date and Time */}
                        <div className="text-right hidden md:block">
                            <p className="text-lg font-semibold text-white">{currentTime}</p>
                            <p className="text-sm text-gray-400">{currentDate}</p>
                        </div>

                        {/* User Avatar and Logout */}
                        <div className="flex items-center gap-3">
                            {/* User Avatar */}
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                    {data?.name ? data.name.charAt(0).toUpperCase() : "A"}
                                </span>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={LogoutHandler}
                                className="group flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/40 rounded-lg text-red-400 hover:text-red-300 transition-all duration-300 transform hover:scale-105"
                            >
                                <svg 
                                    className="w-4 h-4 transition-transform group-hover:rotate-12" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="font-medium text-sm">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile date/time */}
                <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{currentDate}</span>
                        <span className="text-white font-medium">{currentTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;