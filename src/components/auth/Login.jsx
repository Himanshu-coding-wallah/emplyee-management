import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const formHandler= (e)=>{
        e.preventDefault()
        setEmail("")
        setPassword("")
    }

    const showHandler = ()=>{
        setShowPassword(prev => !prev)
    }

  return (
        <div className='flex items-center justify-center min-h-screen bg-gray-900 px-6'>
            
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

                <button className='w-full bg-teal-600 hover:bg-teal-500 transition py-3 rounded-full font-semibold tracking-wide'>
                    Log In
                </button>
            </form>
        </div>
  )
}

export default Login