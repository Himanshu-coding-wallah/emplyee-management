import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/AuthContext'

const AllTask = ({tasks}) => {
   
  return (
    <>
        <div 
        id='taskList' 
        className='rounded-xl bg-gray-800 px-4 py-4 w-full h-40 mt-6 overflow-y-auto space-y-3'
        >
            {tasks.map((task, index)=>(
            <div key={index} className='flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg border border-gray-600'>
                <h1 className='flex-1 font-medium text-white'>{task.assignedTo}</h1>
                <h1 className=' flex-2 text-gray-300 text-center'>{task.title}</h1>
                <h1 className=' flex-1 text-teal-400 font-semibold text-end'>{task.priority}</h1>
            </div>
            ))}

            
        </div>
    </>
  )
}

export default AllTask