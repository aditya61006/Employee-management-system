import React from 'react';

const FaildTask = () => {
    return (
        <div>
             <div className=' p-3 shrink-0 h-full w-[300px] rounded-xl  bg-amber-800 '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 rounded px-1 text-sm'>High</h3>
                    <h4 className='text-sm'>JULY 7 2025</h4>
                </div>

                <h2 className='mt-4 text-xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto quisquam quia ducimus! Perferendis.</p>

                <div className=' flex justify-between mt-9 '>
            {/* <button className="bg-green-600 py-1  px-1.5 rounded-xl text-sm">Accept Task </button> */}
            {/* <button className="bg-red-600 py-1  px-1.5 rounded-xl text-sm">Mark to Failed </button> */}

                </div>
            </div>
        </div>
    );
}

export default FaildTask;
