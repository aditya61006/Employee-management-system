import React  from 'react';
import { useContext } from 'react';
import Header from '../others/header';
import CreateTask from '../others/createTask';
import AllTasks from '../others/AllTasks';
import { AuthContext } from '../../context/AuthProvider';
const AdminDashboard = ({setUser}) => {
        const {adminData} = useContext(AuthContext);

    return (
        <div className=' p-10 h-screen w-full '>
            <Header data = {adminData} setUser = {setUser} />
            <CreateTask/>
              <AllTasks/>
              
        </div>
    );
}

export default AdminDashboard;
