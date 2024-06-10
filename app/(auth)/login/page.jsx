
import React from 'react'
// import {usePathname} from 'next/navigation'
import Sidebar from '@/app/ui/dashboard/Sidebar/Sidebar'
import Login from '@/app/ui/Login/LoginForm'
import LoginForm from '@/app/ui/Login/LoginForm'

const page = () => {
    // const pathname = usePathname()

  return (
  
         <div className=' w-full px-4'>
          <LoginForm />
        </div>
   
   
  )
}

export default page