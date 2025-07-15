import React from 'react';
import Header from '../others/header';
import CreateTask from '../others/createTask';
import AllTasks from '../others/AllTasks';
const AdminDashboard = () => {
    return (
        <div className=' p-10 h-screen w-full '>
            <Header  />
            <CreateTask/>
              <AllTasks/>
        </div>
    );
}

export default AdminDashboard;
