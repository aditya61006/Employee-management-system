import React from 'react';

const TaskColList = () => {
    return (
        <div className='flex justify-between gap-6 font-semibold'>
            <div className=' justify-center bg-zinc-700 rounded-3xl px-9 w-[45%] h-40 flex flex-col items-center gap-2'>
            <h2 className='text-5xl'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
            </div>

             <div className='bg-yellow-400 justify-center text-black rounded-3xl  w-1/2 h-40 flex flex-col items-center gap-2'>
            <h2 className='text-5xl'>3</h2>
            <h3 className='text-2xl font-medium'>Completed task</h3>
            </div>

               <div className='bg-zinc-700 rounded-3xl justify-center w-1/2 h-40 flex flex-col items-center gap-2'>
            <h2 className='text-5xl'>0</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
            </div>

               <div className='bg-zinc-700 rounded-3xl  w-1/2 h-40 justify-center flex flex-col items-center gap-2'>
            <h2 className='text-5xl'>0</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
            </div>
            
            
        </div>
    );
}

export default TaskColList;
