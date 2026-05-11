import React, { useEffect, useState } from 'react'
import Navbar from '../others/Navbar'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../taskList/TaskList'
import CreateTask from '../others/CreateTask'

const EmployeeDashboard = () => {
  
  return (
    <>
        <div className='min-h-screen bg-gray-900 text-white flex flex-col'>
            
            <Navbar />

            <div className='flex-1 px-6 sm:px-8 py-6 space-y-6'>
                <TaskListNumber />
                <TaskList />
            </div>

        </div>
    </>
  )
}

export default EmployeeDashboard