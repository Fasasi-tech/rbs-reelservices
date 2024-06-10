import React from 'react'

const TimeOff = () => {
  return (
    <div>
        <table className='w-full lg:w-1/2 mt-8 gap-x-10 border shadow-md'>
            <thead>
                <tr className='px-8 py-2 md:px-4 font-bold border-b-2 border-gray-300'>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4' >2024</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>Used</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>Availalble</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>Allowance</td>
                </tr>
            </thead>
            <tbody >
                <tr className='mt-12 py-8 border-b-2 border-gray-300'>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>Vacation</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>8</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>20</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>28</td>
                </tr>
                <tr className='mt-12 py-8'>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>Vacation</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>8</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>20</td>
                    <td className='md:px-8 sm:px-2 py-2 text-center lg:px-4'>28</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TimeOff