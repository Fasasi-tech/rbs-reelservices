import React from 'react'
import { IoMdAdd } from "react-icons/io";
import Link from 'next/link';
const EmDepartment = () => {
  return (
    <div>
         <div className='flex gap-4 items-center justify-between pl-4'>
            <div className='flex-none'>
                <Link href='/CreateDepartment' className='flex items-center gap-2 font-semibold text-[#FB9678] transition-all border  border-[#FB9678] border-solid hover:bg-[#FB9678] max-w-52 rounded-md hover:text-white p-2 '>
                <IoMdAdd /> Add Department
                </Link>
            </div>
            <div className='w-6/12 justify-items-end'>
                <input 
                    type='text'
                    placeholder='search'
                    className='outline-none border border-[#FB9678] text-gray-500 w-full bg-gray-100 p-2 rounded-md'
                    // onChange={event => setQuery(event.target.value)}
                />
            </div>
        </div>
    </div>
  )
}

export default EmDepartment