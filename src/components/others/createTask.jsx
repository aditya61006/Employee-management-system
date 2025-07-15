import React from 'react';

const CreateTask = () => {
    return (
        <div>
             <div >
                <form  className='flex flex-wrap w-full bg-zinc-900 p-4 justify-between'>
                   <div className='flex flex-col gap-6 w-1/2'>
                     <div>
                        <h3 className =" text-sm text-gray-300">Title</h3>
                    <input type="text" placeholder='Create an UI design' className='placeholder:text-sm w-4/5 rounded border-[.5px] border-zinc-600 px-2 ' />
                     </div>
                  
                    <div className =" text-sm text-gray-300">
                        <h3>Date</h3>
                    <input type="date" placeholder='DATE'  className='placeholder:text-sm w-4/5 rounded border-[.5px] text-gray-300 border-zinc-600 px-2 '/>
                    </div>

                  <div>
                      <h3 className =" text-sm text-gray-300">Assign to</h3>
                    <input type="text" placeholder='Employee name' className='placeholder:text-sm w-4/5 rounded border-[.5px] border-zinc-600 px-2 ' />
                  </div>
                   
                   <div>
                     <h3 className =" text-sm text-gray-300">Category</h3>
                    <input type="text" placeholder='design, dev, etc..' className=' placeholder:text-sm w-4/5 rounded border-[.5px] border-zinc-600 px-2 '/>
                   </div>
                   </div>


                    <div className='w-2/5'>
                        <div >
                              <h3 className =" text-sm text-gray-300">Description</h3>
                    <textarea className='w-full outline-none border-zinc-600 rounded p-1 border' name="" id="" rows="7" cols="30"/>
                        </div>
                    <button className='bg-emerald-700 w-full mt-4 p-1 rounded hover:bg-emerald-800'>Create Task</button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default CreateTask;
