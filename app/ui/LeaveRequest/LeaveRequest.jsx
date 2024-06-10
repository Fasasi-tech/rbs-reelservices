'use client'
import React, {useState} from 'react'
import GridLeaveRequestLayout from '../LeaveRequestLayout/gridLeaveRequestLayout';
import TableLeaveLayout from '../LeaveRequestLayout/TableLeaveLayout';
import { FaTableCells } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";



const LeaveRequest = () => {
    
const [createdAt, setCreatedAt] = useState(false)
const [displayFormat, setDisplayFormat] = useState('grid')
const [asc, setAsc] = useState(true)

    const handleMouseEnter = () => {
        setCreatedAt(true)
    }

    const handleTouchStart = () => {
        setCreatedAt(true)
    }

    const handleTouchEnd =() =>{
        setCreatedAt(false)
    }

    const handleMouseLeave= () =>{
        setCreatedAt(false)
    }

    const handleToggleSort = () =>{
        setAsc(!asc)
    }

    const toggleDisplayFormat = () =>{
        setDisplayFormat(prevFormat => prevFormat ==='grid' ? 'table' : 'grid')
    }

  return (
    <div>
        <div className='flex items-end gap-2 justify-end'>
            <button className='text-[#FB9678] flex items-center justify-between'  onClick={handleToggleSort}>
                <p> Name </p>
                {asc ? <FaLongArrowAltUp/> : <FaLongArrowAltDown/>}
            </button>
            <button onClick={toggleDisplayFormat}>{displayFormat ==='grid' ? <FaTableCells className='text-2xl text-[#FB9678]' /> : <IoGridOutline className='text-2xl text-[#ebbdb0]' /> }</button>
           
        </div>
        { displayFormat ==='grid' ? 
        ( 
            <div className='mt-4'>
                <GridLeaveRequestLayout onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} createdAt={createdAt} />
            </div>
        ) :(
            <div className='mt-4 overflow-scroll w-full  lg:overflow-hidden'>
                <TableLeaveLayout />
            </div>
            
            
       )
        
        }
    </div>
  )
}

export default LeaveRequest