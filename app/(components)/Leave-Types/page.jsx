
import React from 'react'
import CompanyNavLink from '@/app/ui/NavlinkCom/CompanyNavLink'
import LeaveTypes from '@/app/ui/LeaveTypesPage/LeaveTypesPage'

const page = () => {
  
  return (
    <div className='mt-8 w-full'>
         <CompanyNavLink/>
         <div className='mt-4'>
            <LeaveTypes/>
         </div>
         
    </div>
   
  )
} 

export default page