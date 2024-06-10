import React from 'react'
//import Sidebar from '../../ui/dashboard/Sidebar/Sidebar'

const Layout = ({children, welcome,  aggregate, pending}) => {
  return (
        <div>
          <div>{children}</div>
          <div>{welcome}</div>
          <div>{aggregate}</div>
          <div>{pending}</div>
          
        </div>
  )
}

export default Layout