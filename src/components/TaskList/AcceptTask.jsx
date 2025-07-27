import React from 'react';

const AcceptTask = ({data}) => {
    console.log("accepttask",data)
    return (
        <div>
           <div className=' p-3 shrink-0 h-full w-[300px] rounded-xl  bg-amber-800 '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 rounded px-1 text-sm'>{data.category} </h3>
                    <h4 className='text-sm'>{data.date} </h4>
                </div>

                <h2 className='mt-4 text-xl font-semibold'>{data.title} </h2>
                <p className='text-sm mt-2'>{data.description}</p>

                <div className=' flex justify-between mt-9 '>
            <button className="bg-green-600 py-1  px-1.5 rounded-xl text-sm">Mark to Complete </button>
            <button className="bg-red-600 py-1  px-1.5 rounded-xl text-sm">Mark to Failed </button>

                </div>
            </div>
            
             
            
        </div>
    );
}

export default AcceptTask;
