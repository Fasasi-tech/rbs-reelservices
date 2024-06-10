import React from 'react'
import { TiCancel } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'

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

const TableLeaveLayout = ({onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd, createdAt}) => {
  return (
    <div>
        <div>
            <table className='w-full mt-8 gap-x-10 border shadow-md '>
                <thead>
                    <tr className='px-8 bg-[#ebbdb0] py-4 md:px-4 sm:px-0 font-bold text-white'>
                        <th className='md:px-8 text-center py-4 lg:px-4'>Leave Type</th>
                        <th className='md:px-8 text-center py-4 lg:px-4' >Range</th>
                        <th className='md:px-8 text-center py-4 lg:px-4'>Status</th>
                        <th className='md:px-8 text-center py-4 lg:px-4'>Days Applied</th>
                        <th className='md:px-8 text-center py-4 lg:px-4'>Message</th>
                        <th className='md:px-8 text-center py-4 lg:px-4'>Actions</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className='`mt-12 bg-white'>
                        <td className='px-8 py-4 text-center lg:px-4'>Vacation</td>
                        <td className='px-8 py-4 text-center lg:px-4'>
                                {day}/{month}/{year}-{day2}/{month2}/{year2}
                           
                        </td>
                        <td className='px-8 text-center lg:px-4'>pending</td>
                        <td className='px-12 py-4 text-center lg:px-4'>{differenceInDays}</td>
                        <td className='px-12 py-4 text-center lg:px-4'>I need a sick leave</td>
                        <td className='px-8 text-center lg:px-4'>
                            <div className=' flex justify-center items-center h-full'>
                                <TiCancel className='text-2xl text-red-500' />
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default TableLeaveLayout