import React, { useState }  from 'react';
import { useContext } from 'react';
import Header from '../others/header';
import CreateTask from '../others/createTask';
import AllTasks from '../others/AllTasks';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({setUser}) => {
    const {adminData} = useContext(AuthContext);
    const [refresh,setRefresh] = useState(false)

    const handleRefresh = ()=>{
        setRefresh(r => !r )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
           

            <div className='relative z-10 p-4 lg:p-10 space-y-6'>
                <Header data={adminData} setUser={setUser} />
                <CreateTask onTaskCreated={handleRefresh} />
                <AllTasks refresh = {refresh} />
            </div>
        </div>
    );
}

export default AdminDashboard;