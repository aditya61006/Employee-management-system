import { useEffect } from 'react';
import Header from '../others/header';
import TaskColList from '../others/taskColList';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({setUser,employeeDta}) => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            <div className='relative z-10 p-4 lg:p-10 space-y-6'>
                <Header setUser={setUser} data={employeeDta}/>
                <TaskColList data={employeeDta}/>
                
                {/* Task List Section */}
                <div className='bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6'>
                    <div className='flex items-center gap-3 mb-6'>
                        <div className='p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'>
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold text-white'>My Tasks</h2>
                            <p className='text-gray-400 text-sm'>Manage your assigned tasks</p>
                        </div>
                    </div>
                    
                    <TaskList data={employeeDta}/> 
                </div>
            </div>
        </div>
    );
}

export default EmployeeDashboard