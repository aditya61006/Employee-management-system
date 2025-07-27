import { useEffect } from 'react';
import Header from '../others/header';
import TaskColList from '../others/taskColList';
import TaskList from '../TaskList/TaskList';
const EmployeeDashboard = ({setUser,employeeDta}) => {
   
   
    return (
        <div className=' p-10 bg-[#1c1c1c]  h-screen'>
            <Header setUser={setUser} data = {employeeDta}/>
          
            <TaskColList data = {employeeDta}/>
            <TaskList data = {employeeDta}/> 

        </div>
    );
}

export default EmployeeDashboard;
