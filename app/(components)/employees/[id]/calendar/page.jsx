import React from "react"
import Calendar from "@/app/ui/Calendar/Calendar"
import SingleEmployeeNavLink from "@/app/ui/dashboard/navLinks/SingleEmployeeNavLink"


const page = ({params}) => {
  const {id} = params;
  const links= [
    {name:"Profile", href:`/employees/${id}/userProfile`},
    {name:"Leaves", href:`/employees/${id}/leaves`},
    {name:"Calendar", href:`/employees/${id}/calendar`},
    {name:"Time Off", href:`/employees/${id}/timeOff`},
    {name:"Allowances", href:`/employees/${id}/allowances`}

  ]
    return (
      <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold '>
          {links.map((link)=>(
            <SingleEmployeeNavLink link={link} key={link.name} />
          ))}
        </div>
        <div className="mt-4">
          <Calendar />
        </div>
      </div>
     
    )
  }
  
  export default page