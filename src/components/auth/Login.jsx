import React, { useState } from 'react';

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

      const submithandler = (e)=>{
            e.preventDefault()
            console.log("email : ",email,"    password : ",password)
            setEmail("")
            setPassword("")
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
                        <input
                            value={password}
                            onChange={(e)=>{
                                 setPassword(e.target.value)   
                               
                            }}                        
                        type="password" required className=' mt-3 h-7 p-2 outline-none bg-zinc-800 brder rounded-sm  placeholder:text-zinc-600 text-xs  ' placeholder='Enter your Password' />
                    </div>

                    <div className='flex flex-row text-xs justify-between'>
                        <div><input type="checkbox" id='remember' /> <label htmlFor="remember">Remember me</label></div>
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
