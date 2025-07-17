import { useEffect, useState ,useContext} from 'react'
import Login from './components/auth/Login'
import './App.css'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import AllTasks from './components/others/AllTasks'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [User, setUser] = useState(null);
  

  const data = useContext(AuthContext);
  console.log(data)
  
  return (
    <>
      
      {  !User ? <Login value = {{User,setUser}} /> : ""}
      
      { User == "Employee" ? <EmployeeDashboard /> :  <AdminDashboard/>}
       
    
    </>
  )
}

export default App
