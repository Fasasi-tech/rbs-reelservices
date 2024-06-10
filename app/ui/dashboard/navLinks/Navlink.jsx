import React from 'react'
import EmpNavLinks from './EmpNavLinks'

const links = [
    {name: "Employees", href:"/employees"},
    {name:"Teams", href:"/teams"},
    {name:"Department", href:"/department"}
]

const Navlink = () => {
  return (
    <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold'>
            {links.map((link) => (
                <EmpNavLinks link={link} key={link.name}/>
            ))}
        </div>
    </div>
  )
}

export default Navlink