import React from 'react';
import Header from '../others/header';
import TaskColList from '../others/taskColList';
import TaskList from '../TaskList/TaskList';
const EmployeeDashboard = () => {
    return (
        <div className=' p-10 bg-[#1c1c1c]  h-screen'>
            <Header />
            <TaskColList />
            <TaskList /> 

        </div>
    );
}

export default EmployeeDashboard;
