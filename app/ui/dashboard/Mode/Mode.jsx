

import React from 'react'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'
import { useStateContext } from '@/app/context/ContextProvider'

const Mode = () => {
    const {toggleWhiteMode, toggleDarkMode, resolvedTheme, dropdownVisible, toggleDropdown} = useStateContext();
  

    return (
    <>
    {dropdownVisible && (<div className={`absolute top-24  right-14 p-10 w-40  rounded-md shadow-md  ${resolvedTheme === 'dark' ? 'bg-[#1b1b1b]': 'bg-white'}`}>
        <div>
            <p onClick={toggleWhiteMode} className='cursor-pointer pt-4 flex gap-4 items-center'> <span><MdOutlineLightMode/></span> Light</p>
            <p onClick={toggleDarkMode}  className='cursor-pointer pt-4 flex gap-4 items-center'><span><MdOutlineDarkMode/></span> Dark</p>
        </div>
    </div>)}

    </>
  )
}

export default Mode