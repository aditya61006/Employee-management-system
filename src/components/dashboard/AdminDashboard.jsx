import React  from 'react';
import { useContext } from 'react';
import Header from '../others/header';
import CreateTask from '../others/createTask';
import AllTasks from '../others/AllTasks';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({setUser}) => {
    const {adminData} = useContext(AuthContext);

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            <div className='relative z-10 p-4 lg:p-10 space-y-6'>
                <Header data={adminData} setUser={setUser} />
                <CreateTask/>
                <AllTasks/>
            </div>
        </div>
    );
}

export default AdminDashboard;