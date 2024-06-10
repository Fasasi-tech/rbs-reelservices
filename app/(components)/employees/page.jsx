import Employees from '@/app/ui/dashboard/employeesPage/Employees'
import Navlink from '@/app/ui/dashboard/navLinks/Navlink'
import React from 'react'

const page = () => {
  return (
    <div className=' mt-4  w-full '>
      <Navlink />
      <Employees />
    </div>
  )
}

export default page