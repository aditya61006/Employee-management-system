import { useState } from 'react';

const CreateTask = () => {
    const [title, settitle] = useState('');
    const [date, setDate] = useState('');   
    const [Description, setDescription] = useState('');
    const [assignto, setAssignto] = useState('');
    const [category, setcategory] = useState('');
    const [task, setTask] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault()
        setTask({active:false,category,completed: false,date,Description,failed: false,newTask:true,title})

        const data = JSON.parse(localStorage.getItem('employees'))
        console.log(data)
        let userexist = false

        data.forEach(element => {
             if (assignto.toLowerCase() === (element.name).toLowerCase()) {
                element.tasks.push(task)
                element.taskCount.newTask++
                console.log(element)
                userexist = true
                localStorage.setItem("employees",JSON.stringify(data))
             }
        });

        if (!userexist) {
            alert("User doesn't exist")
        }  
        
        settitle('')
        setDate('')
        setDescription('')
        setcategory('')
        setAssignto('')
    }

    return (
        <div className='mb-8'>
            <div className='bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden'>
                {/* Header */}
                <div className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-white/10 p-6'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg'>
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold text-white'>Create New Task</h2>
                            <p className='text-gray-400 text-sm'>Assign tasks to team members</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={submitHandler} className='p-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {/* Left Column - Basic Info */}
                        <div className='lg:col-span-2 space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {/* Title */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                                        Task Title *
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => settitle(e.target.value)}
                                            placeholder='e.g., Create UI design for dashboard'
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                            required
                                        />
                                        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Due Date */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                                        Due Date *
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                            required
                                        />
                                        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Assign To */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                                        Assign To *
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type="text"
                                            value={assignto}
                                            onChange={(e) => setAssignto(e.target.value)}
                                            placeholder='Enter employee name'
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                                            required
                                        />
                                        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                                        Category *
                                    </label>
                                    <div className='relative'>
                                        <select
                                            value={category}
                                            onChange={(e) => setcategory(e.target.value)}
                                            className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none'
                                            required
                                        >
                                            <option value="" className='bg-gray-800'>Select category</option>
                                            <option value="design" className='bg-gray-800'>Design</option>
                                            <option value="development" className='bg-gray-800'>Development</option>
                                            <option value="testing" className='bg-gray-800'>Testing</option>
                                            <option value="marketing" className='bg-gray-800'>Marketing</option>
                                            <option value="research" className='bg-gray-800'>Research</option>
                                            <option value="other" className='bg-gray-800'>Other</option>
                                        </select>
                                        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Description */}
                        <div className='space-y-6'>
                            <div>
                                <label className='block text-sm font-medium text-gray-300 mb-2'>
                                    Description *
                                </label>
                                <textarea
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='Provide detailed task description, requirements, and expectations...'
                                    rows="8"
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none'
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className='w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2'
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Create Task
                            </button>

                            {/* Tips */}
                            <div className='bg-blue-500/10 border border-blue-500/20 rounded-lg p-4'>
                                <h4 className='text-blue-400 font-medium text-sm mb-2 flex items-center gap-2'>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Tips
                                </h4>
                                <ul className='text-xs text-gray-400 space-y-1'>
                                    <li>• Be specific with task titles</li>
                                    <li>• Set realistic deadlines</li>
                                    <li>• Include clear requirements</li>
                                    <li>• Choose appropriate categories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;