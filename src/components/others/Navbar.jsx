import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between bg-gray-800 text-white px-8 
        py-3 border-b border-gray-700'>
            
            <div>
                <p className='text-sm text-gray-400 font-medium'>
                    Hello,
                </p>
                <h1 className='text-2xl sm:text-3xl font-semibold tracking-wide'>
                    Himanshu
                </h1>
            </div>

            <button className='bg-teal-600 hover:bg-teal-500 transition px-4 py-2 rounded-md font-medium'>
                Log Out
            </button>

        </div>
    </>
  )
}

export default Navbar