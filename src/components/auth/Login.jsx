import React, { use, useEffect, useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../../utils/LocalStorage'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext.jsx'
import { useContext } from 'react'

const Login = () => {
    const [sign, setSign] = useState(false)
    const [newEmployee, setNewEmployee] = useState(
    {
        id: Date.now(),
        name: "",
        email: "",
        password: "",
        role: "",
        newTask: 0,
        completedTask: 0,
        activeTask: 0,
        failedTask: 0,
        tasks: []
    })

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [employee, setEmployee] = useState(null)
    const [password, setPassword] = useState("")
    const [data, setData] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{
        const existing = localStorage.getItem("employee")

        if (!existing) {
            setLocalStorage()
        }

        const newData = JSON.parse(localStorage.getItem("employee")) || []
        setData(newData)
    },[])

    const formHandler= (e)=>{
        e.preventDefault()

        const employeeData = (data.filter((data)=>(data.email === email)))

        if(employeeData.length === 0){
            throw new Error("user doest exist");
        }

        const user01 = employeeData[0]
        console.log(user01)
        localStorage.setItem("userData", JSON.stringify(user01))

        if(user01.role === "admin"){
            navigate("admin-dashboard")
        }else{
            navigate("employee-dashboard")
        }
    }

    const signupHandler = (e)=>{
        e.preventDefault()
        const updatedData = [...data, newEmployee]
        localStorage.setItem("employee", JSON.stringify(updatedData))
        localStorage.setItem("userData", JSON.stringify(newEmployee))
        if(newEmployee.role === "admin"){
            navigate("/admin-dashboard")
        }else{
            navigate("/employee-dashboard")
        }
    }

    const showHandler = ()=>{
        setShowPassword(prev => !prev)
    }
  return (
        <div className='flex items-center justify-center min-h-screen bg-gray-900 px-6'>
            
            {!sign && 
            <form
            onSubmit={formHandler}
            className='w-full max-w-md bg-gray-800 rounded-2xl p-8 sm:p-10 text-white shadow-lg space-y-6'
            >
                <h1 className='text-2xl font-semibold text-center mb-2'>
                    Log In
                </h1>

                <input 
                required
                name='email'
                value={email}
                onChange={(e)=>(setEmail(e.target.value))}
                type="text" 
                placeholder='Email' 
                className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400'
                />

                <div className='relative'>
                    <input 
                    required
                    name='password'
                    value={password}
                    onChange={(e)=>(setPassword(e.target.value))}
                    type={showPassword ? "text" : "password"} 
                    placeholder='Password' 
                    className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400 pr-16'
                    />

                    <button 
                    type='button'
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-sm text-teal-400 hover:text-teal-300 transition'
                    onClick={showHandler}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                 </div>
                
                <div className='flex items-center justify-between text-sm text-gray-300'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="remember" id="remember" className='accent-teal-500' />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type='button' className='hover:text-teal-400 transition'>
                        Forget Password
                    </button>
                </div>

                <div>
                    <button className='w-full bg-green-700 hover:bg-teal-500 transition py-3 rounded-full font-semibold tracking-wide mb-2'>
                        Log In
                    </button>
                    <button
                    type='button'
                    onClick={()=>(setSign(!sign))}
                    className='w-full bg-teal-600 hover:bg-teal-500 transition py-3 rounded-full font-semibold tracking-wide'>
                        Sign Up
                    </button>
                </div>
            </form>
            }

            {sign && 
            <form
            onSubmit={signupHandler}
            className='w-full max-w-md bg-gray-800 rounded-2xl p-8 sm:p-10 text-white shadow-lg space-y-6'
            >
                <h1 className='text-2xl font-semibold text-center mb-2'>
                    Sign Up
                </h1>

                <input 
                required
                name='name'
                value={newEmployee.name}
                onChange={(e)=>setNewEmployee({...newEmployee, name: e.target.value})}
                type="text" 
                placeholder='Name' 
                className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400'
                />

                <input 
                required
                name='email'
                value={newEmployee.email}
                onChange={(e)=>setNewEmployee({...newEmployee, email: e.target.value})}
                type="text" 
                placeholder='Email' 
                className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400'
                />

                <div className='relative'>
                    <input 
                    required
                    name='password'
                    value={newEmployee.password}
                    onChange={(e)=>setNewEmployee({...newEmployee, password: e.target.value})}
                    type={showPassword ? "text" : "password"} 
                    placeholder='Password' 
                    className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400 pr-16'
                    />

                    <button 
                    type='button'
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-sm text-teal-400 hover:text-teal-300 transition'
                    onClick={showHandler}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <select
                onChange={(e) =>
                    setNewEmployee(prev => ({
                    ...prev,
                    role: e.target.value
                    }))
                }
                required name="Role" id="" className='w-full bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 p-3 rounded-full outline-none transition placeholder:text-gray-400 pr-16'>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                </select>
                
                <div className='flex items-center justify-between text-sm text-gray-300'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="remember" id="remember" className='accent-teal-500' />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type='button' className='hover:text-teal-400 transition'>
                        Forget Password
                    </button>
                </div>

                <div>
                    
                    <button
                    className='w-full bg-teal-600 hover:bg-teal-500 transition py-3 rounded-full font-semibold tracking-wide'>
                        Sign Up
                    </button>
                </div>
            </form>
            }
        </div>
  )
}

export default Login