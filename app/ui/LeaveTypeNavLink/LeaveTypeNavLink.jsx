'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeaveTypeNavLink = ({link}) => {
    const pathName = usePathname()
  return (
    <div>
        <Link
         href={link.href}
         className={`relative ${pathName === link.href ? 'text-[#FB9678]': ""}`}
        >
            {link.name}
            {pathName === link.href && <span className='absolute left-0 -bottom-2 bg-[#FB9678] w-8 h-1.5 transition-all'></span>}
        </Link>
    </div>
  )
}

export default LeaveTypeNavLink