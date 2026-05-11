import React, { useContext, useEffect, useState } from 'react'
import AllTask from './AllTask'
import { getLocalStorage } from '../../utils/LocalStorage.jsx'

const CreateTask = () => {
    const [createdTask, setCreatedTask] = useState([])
    
    const [task, setTask] = useState({
        title: "",
        assignedTo: "",
        priority: "High",
    })
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userData"))
        if (data?.createdTasks) {
            setCreatedTask(data.createdTasks)
        }
        console.log(data)
    },[])

    const formHandler=(e)=>{
        e.preventDefault()
        const data = JSON.parse(localStorage.getItem("userData"))
        const existingTasks = data.createdTasks
        const updatedTasks = [...existingTasks, task]
        const updatedData = {...data,
            createdTasks: updatedTasks,
        }
        localStorage.setItem("userData", JSON.stringify(updatedData))
        console.log(updatedData)

        // updating data of the admin
        const employeeData = JSON.parse(localStorage.getItem("employee"))
        const updatedEmployeeData = employeeData.map((emp, index)=>{
            if(emp.email.toLowerCase().trim() === updatedData.email.toLowerCase().trim()){
                return updatedData
            }
            return emp
        })
        localStorage.setItem("employee", JSON.stringify(updatedEmployeeData))
        console.log(updatedEmployeeData)

        //updating data of the employee
        const empData = updatedEmployeeData.map((emp)=>{
            if(emp.name.toLowerCase().trim() === task.assignedTo.toLowerCase().trim()){
                return {
                    ...emp,
                    tasks: [...emp.tasks, task],    
                    newTask: emp.newTask + 1
                }
            }
            return emp
        })
        localStorage.setItem("employee", JSON.stringify(empData))
        console.log(empData)
        setCreatedTask(updatedTasks)
    }

  return (
   
    <div className='bg-gray-900 text-white sm:px-8 py-6'>
        
        <div className='bg-gray-800 p-4 w-full rounded-xl border border-gray-700 shadow-sm'>
            
            <form onSubmit={formHandler}className='sm:flex sm:justify-between gap-10'>
                
                <div className='sm:w-[45%] space-y-4'>
                    
                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>Task Title</h1>
                        <input 
                        name='title'
                        value={task.title}
                        onChange={(e) =>
                            setTask({ ...task, title: e.target.value })
                        }
                        type="text" 
                        placeholder='Make a UI design'
                        className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'
                        />
                    </div>

                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>Date</h1>
                        <input 
                        className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'
                        type="date"
                        />
                    </div>

                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>Assign To</h1>
                        <input
                        name='assignedTo'
                        value={task.assignedTo}
                        onChange={(e) =>
                            setTask({ ...task, assignedTo: e.target.value })
                        } 
                        className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'
                        type="text"
                        />
                    </div>

                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>
                            Status
                        </h1>
                        <select
                        value={task.priority}
                        onChange={(e) =>
                            setTask({ ...task, priority: e.target.value })
                        } 
                         name="priority" id="" className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        
                    </div>

                </div>

                <div className='sm:w-[45%] flex flex-col justify-between mt-6 sm:mt-0'>
                    
                    <div>
                        <h1 className='text-sm font-medium text-gray-300 mb-2'>Description</h1>
                        <textarea 
                        className='bg-gray-700 w-full rounded-md h-40 p-3 border border-gray-600 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none'
                        ></textarea>
                    </div>

                    <button 
                    className='mt-4 bg-teal-600 hover:bg-teal-500 transition text-white font-semibold w-full py-2.5 rounded-md'>
                        Create Task
                    </button>

                </div>

            </form>

        </div>

        <AllTask tasks={createdTask}/>

    </div>
  )
}

export default CreateTask