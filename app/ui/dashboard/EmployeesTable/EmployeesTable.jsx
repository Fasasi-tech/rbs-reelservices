'use client'
import Link from 'next/link';
import React from 'react'
import { FaDownload } from "react-icons/fa";
import Pagination from '../../Pagination/Pagination';

const EmployeesTable = ({employeeList }) => {
  return (
    <div>
        <table className='w-full mt-8 gap-x-10 border shadow-md '>
            <thead>
                <tr className='px-8 bg-[#ebbdb0] py-4 md:px-4 font-bold text-white'> 
                {/* bg-[#ebbdb0]  */}
                    <td className='px-12 text-center py-4 lg:px-4'>Employees</td>
                    <td className='px-8 text-center lg:px-4'>Employee ID</td>
                    <td className='px-8 text-center lg:px-4'>Email</td>
                    <td className='px-8 text-center lg:px-4'>Employment</td>
                    <td className='px-8 text-center lg:px-4'>Department</td>
                </tr>
            </thead>
            <tbody>
                {employeeList && employeeList.map((employee, index)=>(
                    <tr  className={`mt-12  ${index % 2 ===0 ? 'bg-white': 'bg-gray-100'} `} key={index}>
                        <td className='px-8 py-4 text-center lg:px-4'><Link href={`/employees/${employee.id}/userProfile`}>{employee.id}</Link></td>
                        <td className='px-8 text-center lg:px-4'>{employee.title}</td>
                        <td className='px-12 text-center lg:px-4'>{employee.title}</td>
                        <td className='px-8 text-center lg:px-4'>{employee.title}</td>
                        <td className='px-8 text-center lg:px-4'>{employee.title}</td>
                                
                    </tr>
                ))}    
            </tbody>
        </table>
        <div>
           
        </div>
    </div>
  )
}

export default EmployeesTable