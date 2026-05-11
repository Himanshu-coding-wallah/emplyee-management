import React, { useContext } from 'react'
import { UserContext } from '../../context/AuthContext.jsx'


const TaskListNumber = () => {
    const data = JSON.parse(localStorage.getItem("userData"))
  return (
    <>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6'>
            
            <div className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col justify-center hover:bg-gray-700 transition'>
                <h1 className='font-bold text-3xl sm:text-4xl text-teal-400 mb-1'>
                    {data.newTask || 0}
                </h1>
                <h2 className='font-medium text-gray-300'>
                    New Task
                </h2>
            </div>

            <div className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col justify-center hover:bg-gray-700 transition'>
                <h1 className='font-bold text-3xl sm:text-4xl text-teal-400 mb-1'>
                    {data.activeTask || 0}
                </h1>
                <h2 className='font-medium text-gray-300'>
                    Active Task
                </h2>
            </div>

            <div className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col justify-center hover:bg-gray-700 transition'>
                <h1 className='font-bold text-3xl sm:text-4xl text-teal-400 mb-1'>
                    {data.completedTask || 0}
                </h1>
                <h2 className='font-medium text-gray-300'>
                    Completed
                </h2>
            </div>

            <div className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col justify-center hover:bg-gray-700 transition'>
                <h1 className='font-bold text-3xl sm:text-4xl text-teal-400 mb-1'>
                    {data.failedTask || 0}
                </h1>
                <h2 className='font-medium text-gray-300'>
                    Failed
                </h2>
            </div>

        </div>  
    </>
  )
}

export default TaskListNumber