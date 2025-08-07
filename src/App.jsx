import { useEffect, useState ,useContext} from 'react'
import Login from './components/auth/Login'
import './App.css'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import Signup from './components/auth/Signup'
function App() {
  const [User, setUser] = useState(null);
  const [employeeDta, setEmployeeDta] = useState(null);
    const [showSignup, setShowSignup] = useState(false);
  

useEffect(() => {
   const who = localStorage.getItem('logInUser') 

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
      
        {!User && !showSignup && (
        <Login
          value={{ setUser, setEmployeeDta }}
          onShowSignup={() => setShowSignup(true)}
        />
      )}


      {!User && showSignup && (
        <Signup onSignupSuccess={() => setShowSignup(false)} />
      )}
       

       
{ User == "Employee" &&  <EmployeeDashboard employeeDta={employeeDta} setUser = {setUser} /> }
       


      { User == "Admin"  &&<AdminDashboard setUser = {setUser}   /> }
    
    </>
  )
}

export default App
