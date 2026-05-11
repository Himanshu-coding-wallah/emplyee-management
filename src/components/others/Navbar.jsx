import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("userData"))

    const logout = ()=>{
        localStorage.removeItem("userData")
        navigate("/")
    }

    return (
    <>
        <div className='flex items-center justify-between bg-gray-800 text-white px-8 
        py-3 border-b border-gray-700'>
            
            <div>
                <p className='text-sm text-gray-400 font-medium'>
                    Hello,
                </p>
                <h1 className='text-2xl sm:text-3xl font-semibold tracking-wide'>
                    {data.name}
                </h1>
            </div>

            <button 
            onClick={logout}
            className='bg-teal-600 hover:bg-teal-500 transition px-4 py-2 rounded-md font-medium'>
                Log Out
            </button>

        </div>
    </>
  )
}

export default Navbar