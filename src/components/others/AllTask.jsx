import React from 'react'

const AllTask = () => {
  return (
    <>
        <div 
        id='taskList' 
        className='rounded-xl bg-gray-800 px-4 py-4 w-full h-40 mt-6 overflow-y-auto space-y-3'
        >

            <div className='flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg border border-gray-600'>
                <h1 className='font-medium text-white'>Himanshu</h1>
                <h1 className='text-gray-300'>Make a UI</h1>
                <h1 className='text-teal-400 font-semibold'>High</h1>
            </div>

            <div className='flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg border border-gray-600'>
                <h1 className='font-medium text-white'>Himanshu</h1>
                <h1 className='text-gray-300'>Make a UI</h1>
                <h1 className='text-teal-400 font-semibold'>High</h1>
            </div>

            <div className='flex items-center justify-between bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg border border-gray-600'>
                <h1 className='font-medium text-white'>Himanshu</h1>
                <h1 className='text-gray-300'>Make a UI</h1>
                <h1 className='text-teal-400 font-semibold'>High</h1>
            </div>

        </div>
    </>
  )
}

export default AllTask