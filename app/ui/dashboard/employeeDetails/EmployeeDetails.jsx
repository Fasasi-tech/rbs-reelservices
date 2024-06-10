import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { useDeleteEmployeeMutation } from '../../slices/usersApiSlice';

const EmployeeDetails = ({employee, handleClick}) => {

   // console.log(id)
    //const [deleteEmployee, {isLoading: Loading, isSuccess, isError}] = useDeleteEmployeeMutation()

    // const handleDelete = async () =>{
    //     const confirmed= window.confirm('Are you sure you want to delete user?');
    //     if(!confirmed){
    //       return('user cannot be deleted')
    //     }  // if user cancels do nothing
        
    //     try{
    //       await deleteEmployee(id)
    //     }catch(error){
    //       console.error('failed to delete user:', error)
    //     }
    //   }


  return ( 
    <div>
        <div className='bg-white p-12 lg:w-1/2 shadow-md rounded-md justify-center mx-auto'>
            <div className='text-[#FB9678] text-2xl flex justify-between mb-4 cursor-pointer'>
               {/* {isSuccess && <p>User deleted successfully!</p>} */}
               <Link href='/employees'>
                    <button className='flex items-center' >
                        <FaArrowAltCircleLeft className='text-[#FB9678]'/>
                    </button>               
               </Link>
               <div className='flex gap-4 justify-end'>
                <button onClick={handleClick}>
                    <FaEdit />
                </button>
               </div>
                
            </div>
            {employee && (
                <>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Employee ID</p>
                        <p>{employee.id}</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Email</p>
                        <p></p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>First Name</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Middle Name</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Employee Number</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Job</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Department</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Employment Type</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Gender</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>D.O.B</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Marital Status</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Religion</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Employment Date</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Resignation Date</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>isAdmin</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                        <p>Employee Title</p>
                        <p>{employee.title}</p>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 py-2 border-b-2 border-gray-100'>
                    <p>Emp Det.</p>
                    <p>{employee.body}</p>
                    </div>
                </>)}
        </div>
    </div>
  )
}

export default EmployeeDetails