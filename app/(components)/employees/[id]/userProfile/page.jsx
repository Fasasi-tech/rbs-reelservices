'use client'
import React, {useState} from 'react'
import axios from 'axios'
import SingleEmployeeNavLink from '@/app/ui/dashboard/navLinks/SingleEmployeeNavLink'
import { useGetEmployeeQuery, useDeleteEmployeeMutation } from '@/app/ui/slices/usersApiSlice';
import Loader from '@/app/ui/dashboard/Loader';
import EmployeeDetails from '@/app/ui/dashboard/employeeDetails/EmployeeDetails';
import EditEmployeeDetails from '@/app/ui/dashboard/EditEmployeeScreen/EditEmployeeDetails';


const page = ({params}) => {
  const [isEditing, setIsEditing]= useState(false)
    const {id} = params;
    const {data:employee, isLoading, error}= useGetEmployeeQuery(id)
    

    const response =useDeleteEmployeeMutation()
    console.log(response)
    if (isLoading){
      return <Loader />    }

    const handleClick=()=>{
      setIsEditing(true)
    }

    const cancelEditScreen =() =>{
      setIsEditing(false)
    }
    const links= [
      {name:"Profile", href:`/employees/${id}/userProfile`},
      {name:"Leaves", href:`/employees/${id}/leaves`},
      {name:"Calendar", href:`/employees/${id}/calendar`},
      {name:"Time Off", href:`/employees/${id}/timeOff`},
      {name:"Allowances", href:`/employees/${id}/allowances`}

    ]
    console.log(links)
    //const singlePost= await getPost(id)

    

    
  return (
  
    <div className='mb-8'>
      <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold'>
        {links.map((link)=>(
        <SingleEmployeeNavLink link={link} key={link.name} />
        ))}
      </div>
        {
        isEditing ? (<EditEmployeeDetails employee={employee} cancelEditScreen={cancelEditScreen}  />) :
        (<EmployeeDetails employee={employee} handleClick={handleClick} /> )
        }
      
    </div>
  )
}

export default page