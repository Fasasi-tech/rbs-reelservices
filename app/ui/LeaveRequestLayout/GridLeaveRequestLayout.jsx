'use client'
import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { AiOutlineClockCircle } from 'react-icons/ai';

const date = new Date()
const day = date.getDate()
const month = date.getMonth()+1
const year=date.getFullYear()

const day2 = date.getDate()+4
const month2 = date.getMonth()+1
const year2=date.getFullYear()

const date1 = new Date(year, month-1, day)
const date2 = new Date(year2, month2 -1, day2)
const differenceInMs = date2 - date1;

const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

const GridLeaveRequestLayout = ({onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd, createdAt}) => {
  return (
    <div className=''>
        <div className='w-72 md:w-1/2 lg:w-1/3 min-h-44 rounded-lg bg-white shadow-md p-4 relative'>
          <div className='flex items-center justify-between border border-b border-x-0 border-t-0 border-gray-200'>
           <div className='flex items-center justify-start gap-2'>
                <div className='bg-green-300 rounded-3xl w-4 h-4'>
                </div>
                <p className='pl-2 text-[#FB9678] font-semibold py-2 '>Vacation</p>   
           </div>
                <button
                    className='text-gray-400'
                    onMouseEnter= {onMouseEnter}
                    onMouseLeave= {onMouseLeave}
                    onTouchStart ={onTouchStart}
                    onTouchEnd={onTouchEnd}
                > 
                    <AiOutlineClockCircle />
                </button>
                {createdAt && 
                    <div className='absolute -top-16 right-0  z-10   bg-gray-600 text-white px-2 py-1 rounded-md whitespace-nowrap'>
                        <div className="border border-gray-800 border-solid rounded-md p-2" >
                            <p>Registered on</p>
                            <p>{day}/{month}/{year}</p>
                        </div>
                    </div>
                }
                    
          
            {/* <Link href='/Leave-Types/1/leave-allowance'>
              <IoIosSettings className='text-2xl cursor-pointer text-[#FB9678]'/>
            </Link> */}
           </div>
           <div className='py-2 border border-b border-x-0 border-t-0 border-gray-200 flex items-center justify-between gap-2'>
                <p>{day}/{month}/{year} - {day2}/{month2}/{year2} </p> <p>{differenceInDays} days</p>
           </div>
           <div className='py-2 flex  items-center justify-start gap-2 border border-b border-x-0 border-t-0 border-gray-200 '>
                <p className='text-gray-400'> <AiOutlineMessage/> </p>
                <p className='font-semibold flex-grow overflow-hidden break-words'>I need a paternity leave</p>
           </div>
           <div className='flex justify-between items-center '>
              <p className='font-semibold'>Pending</p>
              <button className=' py-2 flex items-center text-red-500 justify-between '><TiCancel className='text-lg'/> Cancel request</button>
           </div>
        </div>
    </div>
  )
}

export default GridLeaveRequestLayout