import SingleEmployeeNavLink from '@/app/ui/dashboard/navLinks/SingleEmployeeNavLink';
import TimeOff from '@/app/ui/timeOff/TimeOff';
import React from 'react'

const page = ({params}) => {
    const {id} = params;
    const links= [
        {name:"Profile", href:`/employees/${id}/userProfile`},
        {name:"Leaves", href:`/employees/${id}/leaves`},
        {name:"Calendar", href:`/employees/${id}/calendar`},
        {name:"Time Off", href:`/employees/${id}/timeOff`}

      ]

  return (
    <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold '>
          {links.map((link)=>(
            <SingleEmployeeNavLink link={link} key={link.name} />
          ))}
        </div>
       <div>
            <TimeOff />
       </div> 
    </div>
  )
}

export default page