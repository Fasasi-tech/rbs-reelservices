import React from 'react'
import { FaEdit } from "react-icons/fa";

const Companyinfo = ({handleSetEdit}) => {
  return (
    <div>
        <div className='bg-white p-12 lg:w-1/2 shadow-md rounded-md justify-center mx-auto'>
            <div className='flex justify-end'>
                <button onClick={handleSetEdit} className='text-[#FB9678] text-2xl'>
                    <FaEdit />
                </button>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p className='font-semibold'>Name</p>
                <p></p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Country</p>
                <p></p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>City</p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Business year starts on</p>
            </div> 
            <div className='flex items-center pt-4 font-semibold justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Contact information</p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Email</p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Address</p>
            </div>
            <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                <p>Phone</p>
            </div>
        </div>
    </div>
  )
}

export default Companyinfo