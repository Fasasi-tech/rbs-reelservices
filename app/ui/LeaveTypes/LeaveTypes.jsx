import React from 'react'
import { IoIosSettings } from "react-icons/io";
import Link from 'next/link';

const LeaveTypesLeave = () => {
  return (
    <div>
        <div className='w-72 md:w-1/2 lg:w-1/3 h-36 rounded-lg bg-white shadow-md p-4'>
          <div className='flex items-center justify-between border border-b border-x-0 border-t-0 border-gray-200'>
           <div className='flex items-center justify-start gap-2 '>
                <div className='bg-green-300 rounded-3xl w-4 h-4'>
                </div>
                <p className='pl-2 text-[#FB9678] font-semibold py-2 '>Vacation</p>
                
           </div>
            <Link href='/Leave-Types/1/leave-allowance'>
              <IoIosSettings className='text-2xl cursor-pointer text-[#FB9678]'/>
            </Link>
           </div>
           
           <div className='py-2 flex items-center justify-between gap-2 border border-b border-x-0 border-t-0 border-gray-200 '>
                <p className='text-gray-400'>Allowance</p>
                <p className='text-green-500 font-semibold'>10 days per year</p>
           </div>
           <div>
              <p className='text-gray-400 py-2'>Full day request</p>
           </div>
        </div>
    </div>
  )
}

export default LeaveTypesLeave