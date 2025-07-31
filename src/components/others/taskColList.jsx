 const TaskColList = ({data}) => {
    console.log('taskcollist',data)

    const stats = [
        {
            title: 'New Tasks',
            count: data.taskCount.newTask,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            gradient: 'from-blue-500 to-purple-600',
            bgGradient: 'from-blue-500/10 to-purple-600/10',
            borderColor: 'border-blue-500/20'
        },
        {
            title: 'Completed',
            count: data.taskCount.completed,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-500/10 to-emerald-600/10',
            borderColor: 'border-green-500/20'
        },
        {
            title: 'In Progress',
            count: data.taskCount.active,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-yellow-500 to-orange-600',
            bgGradient: 'from-yellow-500/10 to-orange-600/10',
            borderColor: 'border-yellow-500/20'
        },
        {
            title: 'Failed',
            count: data.taskCount.failed,
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-red-500 to-pink-600',
            bgGradient: 'from-red-500/10 to-pink-600/10',
            borderColor: 'border-red-500/20'
        }
    ];

    return (
        <div className='mb-8'>
            {/* Stats Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6'>
                {stats.map((stat, index) => (
                    <div 
                        key={index}
                        className={`group relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-lg rounded-2xl p-6 border ${stat.borderColor} hover:border-opacity-40 transition-all duration-500 hover:transform hover:scale-105 animate-fadeInUp`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 rounded-2xl opacity-5">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-y-8 -translate-x-8"></div>
                        </div>

                        <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
                            {/* Icon */}
                            <div className={`p-3 rounded-full bg-gradient-to-r ${stat.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                {stat.icon}
                            </div>

                            {/* Count */}
                            <div className='space-y-1'>
                                <h2 className='text-4xl lg:text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300'>
                                    {stat.count}
                                </h2>
                                <h3 className='text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
                                    {stat.title}
                                </h3>
                            </div>

                            {/* Progress indicator */}
                            <div className='w-full bg-white/10 rounded-full h-1 overflow-hidden'>
                                <div 
                                    className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out`}
                                    style={{ 
                                        width: `${Math.min((stat.count / Math.max(...stats.map(s => s.count))) * 100, 100)}%` 
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                ))}
            </div>

            {/* Summary Card */}
            <div className='mt-6 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-white mb-1'>Task Overview</h3>
                        <p className='text-gray-400 text-sm'>
                            Total: {data.taskCount.newTask + data.taskCount.completed + data.taskCount.active + data.taskCount.failed} tasks
                        </p>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <div className='text-center'>
                            <p className='text-sm text-gray-400'>Completion Rate</p>
                            <p className='text-lg font-bold text-green-400'>
                                {((data.taskCount.completed / Math.max(data.taskCount.newTask + data.taskCount.completed + data.taskCount.active + data.taskCount.failed, 1)) * 100).toFixed(1)}%
                            </p>
                        </div>
                        
                        <div className='w-16 h-16 relative'>
                            <svg className='w-16 h-16 transform -rotate-90' viewBox='0 0 36 36'>
                                <path
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                    fill='none'
                                    stroke='rgba(255,255,255,0.1)'
                                    strokeWidth='2'
                                />
                                <path
                                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                                    fill='none'
                                    stroke='#10b981'
                                    strokeWidth='2'
                                    strokeDasharray={`${((data.taskCount.completed / Math.max(data.taskCount.newTask + data.taskCount.completed + data.taskCount.active + data.taskCount.failed, 1)) * 100)}, 100`}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TaskColList