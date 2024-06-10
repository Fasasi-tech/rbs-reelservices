'use client'
import ProfileNavLink from '@/app/ui/profile/ProfileNavLink'

import React from 'react'
 
import Account from '@/app/ui/profile/Account';

const page = () => {
  return (
    <div className=' w-full '>
      <ProfileNavLink />
      <div className='pl-4'>
        <Account />
      </div>
    </div>
  )
}

export default page