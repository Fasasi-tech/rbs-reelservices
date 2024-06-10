'use client'
import React from 'react'
import SingleEmployeeNavLink from '@/app/ui/dashboard/navLinks/SingleEmployeeNavLink'
import { useGetEmployeeQuery } from '@/app/ui/slices/usersApiSlice';
import Loader from '@/app/ui/dashboard/Loader';
import EmployeeDetails from '@/app/ui/dashboard/employeeDetails/EmployeeDetails';
import LeaveRequest from '@/app/ui/LeaveRequest/LeaveRequest';


const page = ({params}) => {
    const {id} = params;
    const {data:employee, isLoading, error}= useGetEmployeeQuery(id)
    const links= [
      {name:"Profile", href:`/employees/${id}/userProfile`},
      {name:"Leaves", href:`/employees/${id}/leaves`},
      {name:"Calendar", href:`/employees/${id}/calendar`},
      {name:"Time Off", href:`/employees/${id}/timeOff`},
      {name:"Allowances", href:`/employees/${id}/allowances`}
      
    ]
    console.log(links)
    console.log(employee)
    // const singlePost= await getPost(id)
    if (isLoading){
      return <Loader />
    }
  return (

    <div>
     
    <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold '>
      {links.map((link)=>(
      <SingleEmployeeNavLink link={link} key={link.name} />
      ))}
    </div>
    
    <div>
      <LeaveRequest />
    </div>
  </div>
  )
}

export default page