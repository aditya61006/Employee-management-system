import React, { useContext ,useState,useEffect} from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
    const authdata = useContext(AuthContext);
 const [employees, setEmployees] = useState(authdata.userdata.employeesData);



    return (
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden'>
            {/* Header */}
            <div className='bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-b border-white/10 p-6'>
                <div className='flex items-center gap-3'>
                    <div className='p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg'>
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-white'>Team Overview</h2>
                        <p className='text-gray-400 text-sm'>Monitor all employee tasks and performance</p>
                    </div>
                </div>
            </div>

            {/* Table Header */}
            <div className='hidden md:grid md:grid-cols-6 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-medium text-gray-300'>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Employee
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    Completed
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                    Active
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                    Failed
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                    New Tasks
                </div>
                <div className='text-center'>Performance</div>
            </div>

            {/* Table Body */}
            <div className='max-h-96 overflow-y-auto'>
                {employees.map((emp, idx) => {
                    const totalTasks = emp.taskCount.completed + emp.taskCount.active + emp.taskCount.failed + emp.taskCount.newTask;
                    const completionRate = totalTasks > 0 ? ((emp.taskCount.completed / totalTasks) * 100).toFixed(1) : 0;
                    
                    return (
                        <div key={idx} className='border-b border-white/5 hover:bg-white/5 transition-colors duration-200'>
                            {/* Desktop View */}
                            <div className='hidden md:grid md:grid-cols-6 gap-4 p-4 items-center'>
                                {/* Employee Info */}
                                <div className='flex items-center gap-3'>
                                    <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                                        <span className='text-white font-semibold text-sm'>
                                            {emp.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-white font-medium'>{emp.name}</p>
                                        <p className='text-gray-400 text-xs'>{emp.email}</p>
                                    </div>
                                </div>

                                {/* Task Counts */}
                                <div className='text-center'>
                                    <span className='inline-flex items-center justify-center w-8 h-8 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold'>
                                        {emp.taskCount.completed}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='inline-flex items-center justify-center w-8 h-8 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold'>
                                        {emp.taskCount.active}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='inline-flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold'>
                                        {emp.taskCount.failed}
                                    </span>
                                </div>
                                <div className='text-center'>
                                    <span className='inline-flex items-center justify-center w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold'>
                                        {emp.taskCount.newTask}
                                    </span>
                                </div>

                                {/* Performance */}
                                <div className='text-center'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex-1 bg-gray-700 rounded-full h-2'>
                                            <div 
                                                className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500'
                                                style={{ width: `${completionRate}%` }}
                                            ></div>
                                        </div>
                                        <span className='text-sm font-medium text-white min-w-[3rem]'>
                                            {completionRate}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile View */}
                            <div className='md:hidden p-4 space-y-3'>
                                {/* Employee Header */}
                                <div className='flex items-center gap-3 mb-3'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                                        <span className='text-white font-semibold'>
                                            {emp.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white font-medium'>{emp.name}</p>
                                        <p className='text-gray-400 text-sm'>{emp.email}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-sm text-gray-400'>Performance</p>
                                        <p className='text-lg font-bold text-green-400'>{completionRate}%</p>
                                    </div>
                                </div>

                                {/* Task Stats Grid */}
                                <div className='grid grid-cols-2 gap-3'>
                                    <div className='bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center'>
                                        <p className='text-green-400 text-2xl font-bold'>{emp.taskCount.completed}</p>
                                        <p className='text-green-300 text-xs'>Completed</p>
                                    </div>
                                    <div className='bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-center'>
                                        <p className='text-yellow-400 text-2xl font-bold'>{emp.taskCount.active}</p>
                                        <p className='text-yellow-300 text-xs'>Active</p>
                                    </div>
                                    <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center'>
                                        <p className='text-red-400 text-2xl font-bold'>{emp.taskCount.failed}</p>
                                        <p className='text-red-300 text-xs'>Failed</p>
                                    </div>
                                    <div className='bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center'>
                                        <p className='text-blue-400 text-2xl font-bold'>{emp.taskCount.newTask}</p>
                                        <p className='text-blue-300 text-xs'>New Tasks</p>
                                    </div>
                                </div>

                                {/* Performance Bar */}
                                <div className='bg-gray-700 rounded-full h-2 overflow-hidden'>
                                    <div 
                                        className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500'
                                        style={{ width: `${completionRate}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Footer */}
            <div className='bg-white/5 border-t border-white/10 p-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='text-sm text-gray-400'>
                        Total Employees: {employees.length}
                    </div>
                    <div className='flex items-center gap-4 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            <span className='text-gray-300'>High Performers (80%+)</span>
                            <span className='text-green-400 font-semibold'>
                                {employees.filter(emp => {
                                    const total = emp.taskCount.completed + emp.taskCount.active + emp.taskCount.failed + emp.taskCount.newTask;
                                    return total > 0 && (emp.taskCount.completed / total) >= 0.8;
                                }).length}
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default AllTasks;