import React from 'react'
import LeaveTypeNavLink from '../LeaveTypeNavLink/LeaveTypeNavLink'

const links=[
    {
        name:"Allowances",
        href:"/Leave-Types/1/leave-allowance"
    },
    {
        name:"Settings",
        href:"/Leaves"
    }
]
const LeaveAllowancesTypes = () => {
  return (
    <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold'>
            {links.map((link) =>(
                <LeaveTypeNavLink link={link} key={link.name} />
            ))}
        </div>
       
    </div>
  )
}

export default LeaveAllowancesTypes