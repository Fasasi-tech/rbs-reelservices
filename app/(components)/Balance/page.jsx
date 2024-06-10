import Balance from '@/app/ui/profile/Balance'
import ProfileNavLink from '@/app/ui/profile/ProfileNavLink'
import React from 'react'

const page = () => {
  return (
    <div className='mt-8 w-full'>
        <ProfileNavLink />
        <Balance />
    </div>
  )
}

export default page