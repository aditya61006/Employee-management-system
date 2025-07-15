import { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import './App.css'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import AllTasks from './components/others/AllTasks'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
  const [count, setCount] = useState(0)
  

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // })

  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    
    </>
  )
}

export default App
