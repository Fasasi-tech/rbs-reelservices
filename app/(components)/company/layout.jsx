import React from 'react'
//import Sidebar from '../../ui/dashboard/Sidebar/Sidebar'
//import Navbar from '../../ui/dashboard/Navbar/Navbar'



const Layout = ({children}) => {
  return (
        <div>
          <div className='mt-24'>
            {/* <Navlink /> */}
          </div>
         {children}
        </div>
  )
}

export default Layout
