import React from 'react'

const Aggregate = () => {
  return (
    <>
        <div className='mt-8 md:flex mb-2 flex-wrap  gap-8 justify-between  text-center'>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Available Leave Types</p>
                <h1 className='text-[#FB9678] text-[80px]'>5</h1>
            </div>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Active Employees</p>
                <h1 className='text-[#FB9678] text-[80px]'>80</h1>
            </div>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Available Departments</p>
                <h1 className='text-[#FB9678] text-[80px]'>15</h1>
            </div>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Pending Applications</p>
                <h1 className='text-[#FB9678] text-[80px]'>7</h1>
            </div>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Declined Applications</p>
                <h1 className='text-[#FB9678] text-[80px]'>3</h1>
            </div>
            <div className='bg-white dark:bg-slate-800 p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto'>
                <p className='text-gray-400 font-medium'>Approved Applications</p>
                <h1 className='text-[#FB9678] text-[80px]'>54</h1>
            </div>
        </div>
    </>
  )
}

export default Aggregate