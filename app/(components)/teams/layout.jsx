import Navlink from '@/app/ui/dashboard/navLinks/Navlink'
import React from 'react'
//import Sidebar from '../../ui/dashboard/Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
   
        <div>
            <div className='mt-24'>
                <Navlink />
            </div>
         {children}
        </div>
   
  )
}

export default Layout