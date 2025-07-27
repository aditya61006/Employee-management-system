

import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Login = ({value}) => {
    const {setUser,setEmployeeDta}  = value
    const [showPassword, setShowPassword] = useState(true);
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const authData = useContext(AuthContext);

      

      const submithandler = (e)=>{
            e.preventDefault()
    

            if (email == "admin@me.com" && password == "321") {
                console.log("you are admin")
                setUser("Admin")

                localStorage.setItem("logInUser", "Admin")
            }
            else  if (authData){
                const employee =  authData.employeesData.find((emp)=>email == emp.email && emp.password == password )
                console.log(employee)
                if (employee) {
                    setUser("Employee")
                    setEmployeeDta(employee)
                    // console.log(employeeDta)
                    localStorage.setItem("employeedta", JSON.stringify( employee))
                    localStorage.setItem("logInUser","Employee")
                }
             
            }
                else{
                    alert("Invalid Credintals")
                }
                

                
            
 

            setEmail("")
            setPassword("")

        }


        const rememberhandler = ()=>{
            Setremember(!remember)
            console.log(remember)
        }

    return (
        <div className='flex items-center justify-center bg-zinc-900 h-screen w-screen '>
            <div className=' '>
                <form onSubmit={ (e)=>
                    submithandler(e)
                } className=' flex flex-col gap-8 text-amber-50  w-80 h-100 '>
                    <h2 className='text-2xl font-semibold '> Sign in to your account</h2>
                    <div className='flex flex-col  '> 
                        <label htmlFor="Email" className='text-sm' >Email</label>
                        <input value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                            
                        }}  type="email" required className=' mt-3 h-7 p-2 outline-none bg-zinc-800 brder rounded-sm  placeholder:text-zinc-600 text-xs  ' placeholder='Enter your email' />
                    </div>

                    <div className='flex flex-col '> 
                        <label htmlFor="password" className='text-sm'>Password</label>
                       <div  className='relative'>
                         <input
                            value={password}
                            
                            onChange={(e)=>{
                                 setPassword(e.target.value)   
                               
                            }}                        
                        type={showPassword? "text": "password"} required className=' mt-3 w-full h-7 p-2 outline-none bg-zinc-800 brder rounded-sm  placeholder:text-zinc-600 text-xs  ' placeholder='Enter your Password' />

                        <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs mt-1.5 text-zinc-400"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
        >
            {showPassword ? (
                // Eye closed SVG
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12M21 12c0 4.418-4.03 8-9 8-1.657 0-3.156-.336-4.47-.93M3 12c0-4.418 4.03-8 9-8 1.657 0 3.156.336 4.47.93" />
                </svg>
            )  :  (
                // Eye open SVG
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )}
        </button>
                    </div>

                       </div>
                    <div className='flex flex-row text-xs justify-between'>
                        <div><input type="checkbox"  id='remember' /> <label htmlFor="remember">Remember me</label></div>
                      
                        <div><a href="#" className=' underline'>Forget password</a></div>
                    </div>

                    <button className=' h-7 py-2 font-semibold rounded-md text-xs bg-zinc-600'>Login</button>

                    <div className='text-xs flex'>
                        <p className=' text-zinc-400'>Don't have an account?</p><a href="#">sign up</a>
                    </div>


                </form>
            </div>
            
        </div>
    );
}

export default Login;
