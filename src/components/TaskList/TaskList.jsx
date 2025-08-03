import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './completeTask';
import NewTask from './NewTask';
import FaildTask from './FaildTask';

const TaskList = ({data}) => {
    console.log("Task list", data)

    const hasActiveTasks = data.tasks.some(task => task.active);
    const hasCompletedTasks = data.tasks.some(task => task.completed);
    const hasFailedTasks = data.tasks.some(task => task.failed);
    const hasNewTasks = data.tasks.some(task => task.newTask);

    return (
        <div className='space-y-6'>
            {/* No tasks message */}
            {data.tasks.length === 0 && (
                <div className='text-center py-16'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-gray-500/20 rounded-full mb-4'>
                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className='text-xl font-semibold text-gray-300 mb-2'>No Tasks Assigned</h3>
                    <p className='text-gray-400'>You don't have any tasks at the moment. Check back later!</p>
                </div>
            )}

            {/* Task sections */}
            {hasNewTasks && (
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                        <h3 className='text-lg font-semibold text-white'>New Tasks</h3>
                        <span className='px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium'>
                            {data.tasks.filter(task => task.newTask).length}
                        </span>
                    </div>
                    <div 
                        id='tasklst' 
                        className='flex gap-6 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
                        style={{ scrollbarWidth: 'thin' }}
                    >
                        {data.tasks.map((task, idx) => {
                            if (task.newTask) {
                                return <NewTask data={task} key={idx}/>;
                            }
                        })}
                    </div>
                </div>
            )}

            {hasActiveTasks && (
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                        <h3 className='text-lg font-semibold text-white'>In Progress</h3>
                        <span className='px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium'>
                            {data.tasks.filter(task => task.active).length}
                        </span>
                    </div>
                    <div 
                        className='flex gap-6 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
                        style={{ scrollbarWidth: 'thin' }}
                    >
                        {data.tasks.map((task, idx) => {
                            if (task.active) {
                                return <AcceptTask data={task} key={idx}/>;
                            }
                        })}
                    </div>
                </div>
            )}

            {hasCompletedTasks && (
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <h3 className='text-lg font-semibold text-white'>Completed</h3>
                        <span className='px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium'>
                            {data.tasks.filter(task => task.completed).length}
                        </span>
                    </div>
                    <div 
                        className='flex gap-6 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
                        style={{ scrollbarWidth: 'thin' }}
                    >
                        {data.tasks.map((task, idx) => {
                            if (task.completed) {
                                return <CompleteTask data={task} key={idx}/>;
                            }
                        })}
                    </div>
                </div>
            )}

            {hasFailedTasks && (
                <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                        <h3 className='text-lg font-semibold text-white'>Failed</h3>
                        <span className='px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium'>
                            {data.tasks.filter(task => task.failed).length}
                        </span>
                    </div>
                    <div 
                        className='flex gap-6 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent'
                        style={{ scrollbarWidth: 'thin' }}
                    >
                        {data.tasks.map((task, idx) => {
                            if (task.failed) {
                                return <FaildTask data={task} key={idx}/>;
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskList;