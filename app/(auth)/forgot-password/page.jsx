
import React from 'react'
// import {usePathname} from 'next/navigation'
import Sidebar from '@/app/ui/dashboard/Sidebar/Sidebar'
import Login from '@/app/ui/Login/LoginForm'
import LoginForm from '@/app/ui/Login/LoginForm'
import ForgotPassword from '@/app/ui/forgotPassword/ForgotPassword'

const page = () => {
    // const pathname = usePathname()

  return (
  
         <div className='w-full'>
        <ForgotPassword/>
        </div>
   
   
  )
}

export default page