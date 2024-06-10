import React from 'react'

const Verify = () => {
  return (
    <div className='w-full px-4' >
        <div className='grid h-screen items-center md:place-items-center'>
            <div className='lg:w-2/5 sm:w-full bg-white p-8 shadow-lg rounded-lg '>
                <div className='flex flex-col items-center justify-between'>
                    <p className='text-gray-500 font-semibold'>Click the button below to verify your account. </p>
                    <button className='px-12 text-white font-semibold mt-4 rounded-md py-4 bg-[#FB9678]'>
                        Verify
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Verify