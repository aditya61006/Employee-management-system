import React from 'react';

const FaildTask = ({data}) => {
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
            <div className='relative bg-gradient-to-br from-red-500/10 to-pink-600/10 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full'>
                {/* Status indicator */}
                <div className='absolute top-4 right-4'>
                    <div className='w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                {/* Warning indicators */}
                <div className='absolute top-2 left-4'>
                    <div className='w-2 h-2 bg-red-400 rounded-full opacity-70'></div>
                </div>
                <div className='absolute top-6 left-8'>
                    <div className='w-1 h-1 bg-pink-400 rounded-full opacity-50'></div>
                </div>
                <div className='absolute top-3 right-12'>
                    <div className='w-1.5 h-1.5 bg-red-300 rounded-full opacity-60'></div>
                </div>

                {/* Progress bar - failed */}
                <div className='absolute top-0 left-0 right-0 h-1 bg-gray-700 rounded-t-2xl overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-red-500 to-pink-500 w-full opacity-80'></div>
                </div>

                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(data?.category)}`}>
                            {data?.category || 'General'}
                        </span>
                        <span className='px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium'>
                            ✗ Failed
                        </span>
                    </div>
                    <div className='text-right'>
                        <p className='text-sm font-medium text-gray-400'>
                            {formatDate(data?.date)}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className='mb-6'>
                    <h2 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-300 transition-colors duration-300'>
                        {data?.title || 'Make a youtube video'}
                    </h2>
                    <p className='text-gray-300 text-sm leading-relaxed line-clamp-3'>
                        {data?.Description || data?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto quisquam quia ducimus! Perferendis.'}
                    </p>
                </div>

                {/* Failure message */}
                <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4'>
                    <div className='flex items-center gap-2 text-red-400'>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.821.833-.09 2.5 1.732 2.5z" />
                        </svg>
                        <span className='font-medium text-sm'>Task Failed</span>
                    </div>
                    <p className='text-red-300 text-xs mt-1 ml-7'>
                        This task was marked as failed. Consider reviewing and retrying.
                    </p>
                </div>

                {/* Actions - Retry or Archive */}
                <div className='flex gap-3 mt-auto'>
                    <button className='flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Retry Task
                    </button>
                </div>

                {/* Task info footer */}
                <div className='flex items-center justify-between mt-4 pt-4 border-t border-white/10'>
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.821.833-.09 2.5 1.732 2.5z" />
                        </svg>
                        Failed Task
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-red-500 rounded-full'></div>
                        <div className='w-2 h-2 bg-red-400 rounded-full'></div>
                        <div className='w-2 h-2 bg-red-300 rounded-full'></div>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
        </div>
    );
}

export default FaildTask;