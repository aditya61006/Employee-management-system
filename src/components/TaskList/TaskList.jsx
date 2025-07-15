import React from 'react';

const TaskList = () => {
    return (
        <div id='tasklst' className='flex items-center gap-5 h-[55%] flex-nowrap overflow-x-auto  py-5 w-full mt-8'>
            <div className=' p-3 shrink-0 h-full w-[300px] rounded-xl  bg-amber-800 '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 rounded px-1 text-sm'>High</h3>
                    <h4 className='text-sm'>JULY 7 2025</h4>
                </div>

                <h2 className='mt-4 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto quisquam quia ducimus! Perferendis.</p>
            </div>
            
            
            


        </div>
    );
}

export default TaskList;
