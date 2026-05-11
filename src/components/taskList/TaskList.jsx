import React, { useContext } from 'react'
import { UserContext } from '../../context/AuthContext'

const TaskList = () => {
    const data = JSON.parse(localStorage.getItem("userData"))
    const taskArray = data?.tasks || []
  return (
    <>
        <div 
        id='taskList' 
        className='w-full flex flex-col sm:flex-row overflow-x-auto gap-5 px-2 py-4 rounded-xl bg-gray-800 h-[45vh] sm:h-[55vh] md:h-80'
        >
            {taskArray.map((tasks, index)=>(
            <div key={index} className='shrink-0 bg-gray-700 border border-gray-600 p-4 sm:w-72 rounded-xl hover:bg-gray-600 transition'>
                <div className='flex items-center justify-between mb-3 text-sm text-gray-400'>
                    <p className={ `px-3 py-1 rounded-full text-xs font-medium 
                    ${tasks.priority === "High"? 
                        "bg-red-500/20 text-red-400":
                        "bg-green-500/20 text-green-400"
                    }` } >
                        {tasks.priority}
                    </p>
                    <p>{tasks.date}</p>
                </div>

                <h1 className='font-semibold text-lg mb-2'>
                    {tasks.title}
                </h1>

                <p className='text-sm text-gray-300 leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro quo facilis eius quod, ipsam quas hic.
                </p>
            </div>
            ))}

        </div>
    </>
  )
}

export default TaskList