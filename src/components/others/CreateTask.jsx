import React from 'react'
import AllTask from './AllTask'

const CreateTask = () => {
  return (
   
    <div className='bg-gray-900 text-white sm:px-8 py-6'>
        
        <div className='bg-gray-800 p-4 w-full rounded-xl border border-gray-700 shadow-sm'>
            
            <form className='sm:flex sm:justify-between gap-10'>
                
                <div className='sm:w-[45%] space-y-4'>
                    
                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>Task Title</h1>
                        <input 
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
                        className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'
                        type="text"
                        />
                    </div>

                    <div>
                        <h1 className='mb-2 text-sm font-medium text-gray-300'>Category</h1>
                        <input 
                        className='bg-gray-700 w-full py-2.5 px-3 outline-none rounded-md border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition'
                        type="text"
                        />
                    </div>

                </div>

                <div className='sm:w-[45%] flex flex-col justify-between mt-6 sm:mt-0'>
                    
                    <div>
                        <h1 className='text-sm font-medium text-gray-300 mb-2'>Description</h1>
                        <textarea 
                        className='bg-gray-700 w-full rounded-md h-40 p-3 border border-gray-600 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition resize-none'
                        ></textarea>
                    </div>

                    <button className='mt-4 bg-teal-600 hover:bg-teal-500 transition text-white font-semibold w-full py-2.5 rounded-md'>
                        Create Task
                    </button>

                </div>

            </form>

        </div>

        <AllTask/>

    </div>
  )
}

export default CreateTask