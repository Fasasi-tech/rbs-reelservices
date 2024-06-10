import React from 'react'
import CompNavLink from './CompNavLink'

const links = [
    {name:"Company", href:"/company"},
    {name: "Leave Types", href:"/Leave-Types"},
    {name:"Create Company", href:"/Create-Company"}
    
]
const CompanyNavLink = () => {
  return (
    <div>
        <div className='flex gap-8 items-center p-4 text-gray-500 font-semibold'>
        {
            links.map((link) =>(
                <CompNavLink link={link}  key={link.name}/>
            ) )
        }
        </div>
    </div>
    
  )
}

export default CompanyNavLink