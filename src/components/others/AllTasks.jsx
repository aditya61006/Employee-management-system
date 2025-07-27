import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {

        const authdata = useContext(AuthContext);
        console.log(authdata)

    return ( <div>
       
           <div className='flex justify-around py-2 bg-green-800 pl-15 mt-6 rounded '>
            <h2>Name</h2>
            <h2>Completed </h2>
            <h2>Active </h2>
            <h2>Failed  </h2>
            <h2>NewTask </h2>
        
                
           
             
        </div>


        <div id="tasklst" className='bg-zinc-900 p-4  h-40 overflow-auto '>
            {authdata.employeesData.map((emp,idx)=>{
                return  <div key={idx} className='flex justify-around bg-gray-800 px-4 mt-2 rounded py-1'>
            <h2>{emp.name}</h2>
            <h2>{emp.taskCount.completed} </h2>
            <h2>{emp.taskCount.active} </h2>
            <h2>{emp.taskCount.failed} </h2>
            <h2>{emp.taskCount.newTask} </h2>
            </div>
                
           
            })}
          
        </div>
        </div>
    );
}

export default AllTasks;
