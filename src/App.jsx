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
  const [employeeDta, setEmployeeDta] = useState(null);
  

useEffect(() => {
   const who = localStorage.getItem('logInUser') 
    console.log("hi its me local storage call")
   if(who ){
    if (who == "Employee") {
      setUser(who)
      setEmployeeDta(JSON.parse(localStorage.getItem("employeedta")))
      console.log(employeeDta)
      
    }else{
      setUser("Admin")
    }

   }


},[]);

  const data = useContext(AuthContext);
  
  
  return (
    <>
      
      {  !User && <Login value = {{setUser,setEmployeeDta}} /> }
    
       
{ User == "Employee" &&  <EmployeeDashboard employeeDta={employeeDta} setUser = {setUser} /> }
      { User == "Admin"  &&<AdminDashboard setUser = {setUser}   /> }
       
    
    </>
  )
}

export default App
