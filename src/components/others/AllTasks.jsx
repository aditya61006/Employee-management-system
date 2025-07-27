import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {

        const authdata = useContext(AuthContext);
        console.log(authdata)

    return (
        <div id="tasklst" className='bg-zinc-900 p-4 mt-5 h-40 overflow-auto '>
            {authdata.employeesData.map((emp)=>{
                return  <div className='flex justify-around bg-red-800 px-4 mt-2 rounded py-1'>
            <h2>{emp.name}</h2>
            <h3>{emp.tasks.category}</h3>
            <h5>{emp.taskCount.completed} </h5>
            </div>
                
           
            })}
          
        </div>
    );
}

export default AllTasks;
