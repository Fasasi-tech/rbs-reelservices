'use client'
import {useFormik} from 'formik'
import React from 'react'
import { MdAdd } from "react-icons/md";
import Link from 'next/link';

import LeaveTypesLeave from '../LeaveTypes/LeaveTypes';




const LeaveTypes = () => {
  
  return (
    <div>
      <div>
            <button className='text-[#FB9678] font-semibold px-8 py-2  hover:bg-[#FB9678] hover:text-white transition-all rounded-md border
             border-[#FB9678] flex items-center gap-2'><MdAdd className='text-3xl font-semibold' /> <Link href='/Create-Leave-Types'>Add Leave Type</Link></button>
      </div>
      <div className='mt-8'>
        <LeaveTypesLeave />
      </div>

       
    </div>
  )
}

export default LeaveTypes