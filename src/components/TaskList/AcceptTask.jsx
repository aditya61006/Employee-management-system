import React from 'react';

const AcceptTask = ({data}) => {
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

    const isOverdue = (dateString) => {
        if (!dateString) return false;
        return new Date(dateString) < new Date();
    };

    return (
        <div className='flex-shrink-0 w-80 group'>
            <div className='relative bg-gradient-to-br from-yellow-500/10 to-orange-600/10 backdrop-blur-lg rounded-t-lg rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl h-full'>
                {/* Status indicator */}
                <div className='absolute top-4 right-4'>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full animate-pulse'></div>
                </div>

                {/* Progress bar */}
                <div className='absolute top-0  left-0 right-0 h-1 bg-gray-700 rounded-t-4xl overflow-hidden'>
                    <div className='h-full bg-gradient-to-r  from-yellow-500 to-orange-500 animate-pulse'></div>
                </div>

                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-2'>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(data.category)}`}>
                            {data.category || 'General'}
                        </span>
                    </div>
                    <div className='text-right'>
                        <p className={`text-sm font-medium ${isOverdue(data.date) ? 'text-red-400' : 'text-gray-400'}`}>
                            {formatDate(data.date)}
                        </p>
                        {isOverdue(data.date) && (
                            <span className='text-xs text-red-400 font-medium'>Overdue</span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className='mb-6'>
                    <h2 className='text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-yellow-300 transition-colors duration-300'>
                        {data.title || 'Untitled Task'}
                    </h2>
                    <p className='text-gray-300 text-sm leading-relaxed line-clamp-3'>
                        {data.Description || data.description || 'No description provided for this task.'}
                    </p>
                </div>

                {/* Actions */}
                <div className='flex gap-3 mt-auto'>
                    <button className='flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Complete
                    </button>
                    <button className='flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Mark Failed
                    </button>
                </div>

                {/* Task info footer */}
                <div className='flex items-center justify-between mt-4 pt-4 border-t border-white/10'>
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        In Progress
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-yellow-500 rounded-full animate-pulse'></div>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse' style={{animationDelay: '0.5s'}}></div>
                        <div className='w-2 h-2 bg-yellow-300 rounded-full animate-pulse' style={{animationDelay: '1s'}}></div>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
        </div>
    );
}

export default AcceptTask;