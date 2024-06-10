import React from 'react'
import { LuLogIn } from "react-icons/lu";
import { VscOrganization } from "react-icons/vsc";
import Link from 'next/link';

const LoginNavbar = () => {
  return (
    <div className='p-4 shadow-lg '>
        <div className='flex justify-between items-center gap-2'>
            <div>
                <p className='text-2xl text-[#FB9678] font-serif font-semibold'>ReelService</p>
            </div>
            <div className='flex items-center gap-x-8'>
                <Link href='/login'>
                    <p className='text-[#FB9678] flex items-center gap-2 font-semibold'><LuLogIn/> Login</p>
                </Link>
                
                {/* <p className='text-[#FB9678] flex items-center gap-2'> <VscOrganization /> Register Company</p> */}
            </div>
        </div>
    </div>
  )
}

export default LoginNavbar