import React from 'react'
import Link from 'next/link';
import { FaKey } from "react-icons/fa";
const Account = () => {
  return (
    
        <div className='bg-white p-12 lg:w-1/2 shadow-md rounded-md justify-center mx-auto'>
          <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
              <p>Email</p>
              <p>rfaasasi@reeltechsolutions</p>
          </div>
          <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
              <p>Job</p>
              <p></p>
          </div>
          <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
              <p>Team</p>
          </div>
          <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
              <p>Department</p>
          </div>
          <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                  <Link href='/Change-Password'>
                    <div className='flex items-center gap-2 text-[#FB9678] font-semibold'>
                      < FaKey/> Change Password
                    </div>
                  </Link>
          </div>
          
        </div>
  )
}

export default Account