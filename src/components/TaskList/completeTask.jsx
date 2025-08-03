import React from 'react';

const CompleteTask = ({data}) => {
    const getPriorityColor = (category) => {
        const priorities = {
            'design': 'bg-purple-500',
            'development': 'bg-blue-500',
            'testing': 'bg-green-500',
            'marketing': 'bg-pink-500',
            'research': 'bg-indigo-500',
            'urgent': 'bg-red-500',
            'high': 'bg-orange-500',
            'medium': 'bg-yellow-500',
            'low': 'bg-gray-500'
        };
        return priorities[category?.toLowerCase()] || 'bg-gray-500';
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'No due date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className='flex-shrink-0 w-80 group'>
            <div className='relative bg-gradient-to-br rounded-t-lg  from-green-500/10 to-emerald-600/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full'>
                {/* Status indicator */}
                <div className='absolute top-4 right-4'>
                    <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Success confetti effect */}
                <div className='absolute top-2 left-4'>
                    <div className='w-2 h-2 bg-green-400 rounded-full opacity-70'></div>
                </div>
                <div className='absolute top-6 left-8'>
                    <div className='w-1 h-1 bg-emerald-400 rounded-full opacity-50'></div>
                </div>
                <div className='absolute top-3 right-12'>
                    <div className='w-1.5 h-1.5 bg-green-300 rounded-full opacity-60'></div>
                </div>

                {/* Progress bar - completed */}
                <div className='absolute top-0 left-0 right-0 h-1 bg-gray-700 rounded-t-2xl overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-green-500 to-emerald-500 w-full'></div>
                </div>

                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(data.category)}`}>
                            {data.category || 'General'}
                        </span>
                        <span className='px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium'>
                            ✓ Completed
                        </span>
                    </div>
                    <div className='text-right'>
                        <p className='text-sm font-medium text-gray-400'>
                            {formatDate(data.date)}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className='mb-6'>
                    <h2 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-green-300 transition-colors duration-300'>
                        {data.title || 'Untitled Task'}
                    </h2>
                    <p className='text-gray-300 text-sm leading-relaxed line-clamp-3'>
                        {data.Description || data.description || 'No description provided for this task.'}
                    </p>
                </div>

                {/* Completion message */}
                <div className='bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4'>
                    <div className='flex items-center gap-2 text-green-400'>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='font-medium text-sm'>Task Completed Successfully!</span>
                    </div>
                    <p className='text-green-300 text-xs mt-1 ml-7'>
                        Great job! This task has been marked as complete.
                    </p>
                </div>

                {/* Action - Archive or View Details */}
                <div className='flex gap-3 mt-auto'>
                    <button className='flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                    </button>
                </div>

                {/* Task info footer */}
                <div className='flex items-center justify-between mt-4 pt-4 border-t border-white/10'>
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Completed Task
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                        <div className='w-2 h-2 bg-green-300 rounded-full'></div>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
        </div>
    );
}

export default CompleteTask;