
'use client'
import React, {useState} from 'react'
import CompanyNavLink from '@/app/ui/NavlinkCom/CompanyNavLink'
import Companyinfo from '@/app/ui/CompanyInfo/Companyinfo'
import EditCompanyDetails from '@/app/ui/CompanyInfo/EditCompanyDetails'

const page = () => {
  const [edit, setEdit] = useState(false)

  const handleSetEdit = () =>{
    setEdit(true)
  }

  const cancelEditScreen = () =>{
    setEdit(false)
  }
  return (
    <div className='mt-8 w-full'>
         <CompanyNavLink/>
          {edit ? 
          <EditCompanyDetails cancelEditScreen={cancelEditScreen}/> :
         <Companyinfo handleSetEdit={handleSetEdit}/>}
    </div>
   
  )
} 

export default page