import React from 'react'
import ProfileSubNavlink from './ProfileSubNavlink'

const links =[
    {name:"profile", href:'/MyAccount'},
    {name:"Balance", href:"/Balance"}
]

const ProfileNavLink = () => {
  return (
    <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold'>
            {links.map((link) => (
                <ProfileSubNavlink link={link} key={link.name}/>
            ))}
        </div>
    </div>
  )
}

export default ProfileNavLink