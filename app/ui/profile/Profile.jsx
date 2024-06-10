'use client'
import React from 'react'
import Loader from '../dashboard/Loader'
import { useGetProfileQuery } from '../slices/usersApiSlice'
import { FiUser } from "react-icons/fi";
import { FaRegStar, FaPhoneAlt  } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";



const Profile = () => {
    const {data, isLoading, error} = useGetProfileQuery()
    console.log(data)
    if(isLoading){
        return <Loader />
    }

    if (error){
        return <div className='text-[#FB9678]'>oops, error fetching data</div>
    }

  return (
    <div>
        {
            data && (
                <div className="flex flex-start  ">
                    <div className="flex flex-col bg-white dark:bg-slate-800 w-full  px-4 md:w-1/2  py-12 border rounded-lg border-dashed">
                        <p className="text-[#989898] font-extrabold" >Profile Details</p>
                        <p className="text-[#989898] pt-4 flex items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans'><span className='font-medium'><FiUser className='text-[#FB9678]'/></span>First Name:</p> <p>{data.givenName}</p></p>
                        <p className="text-[#989898] pt-4 flex items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans'><span className='font-medium'><FiUser className='text-[#FB9678]'/></span>Last Name:</p><p>{data.surname}</p></p>
                        <p className="text-[#989898] pt-4 flex items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans'><span className='font-medium'><FaRegStar className='text-[#FB9678]' /></span>Role:</p ><p> {data.jobTitle}</p></p>
                        <p className="text-[#989898] pt-4 flex flex-wrap items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans '><span className='font-medium'> <IoMailOutline className='text-[#FB9678]' /></span>Email:</p> <p className='break-words'> {data.mail}</p></p>
                        <p className="text-[#989898] pt-4 flex items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans'><span className='font-medium'> <FaPhoneAlt className='text-[#FB9678]'/></span>Phone:</p> <p>{data.mobilePhone}</p></p>
                        <p className="text-[#989898] pt-4 flex items-center gap-2"><p className='flex items-center gap-2 font-medium font-sans'><span className='font-medium'> <BiDetail className='text-[#FB9678]'/></span>Language:</p> <p>{data.preferredLanguage}</p></p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Profile