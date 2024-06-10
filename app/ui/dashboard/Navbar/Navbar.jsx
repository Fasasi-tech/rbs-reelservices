'use client'
import React from 'react'
import { useStateContext } from '@/app/context/ContextProvider'
import {MdOutlineLightMode, MdOutlineDarkMode} from 'react-icons/md'
import { HiBars3BottomRight } from "react-icons/hi2";
import Mode from '../Mode/Mode';
import Sidebar from '../Sidebar/Sidebar';
import { FaRegUser } from "react-icons/fa";
import LoginForm from '../../Login/LoginForm';
import Popup from './Popup';
import ToggleMode from '@/app/context/ToggleMode';


const NavButton = ({ toggle, icon, color, app }) => (
    <button
      type="button"
      onClick={toggle}
      style={{ color }}
      className={app}
    >
      {icon}
    </button>
);

const Navbars = () => {
const {open, setOpen, handleClick, mode, isClicked, toggleWhiteMode, toggleDarkMode, toggleDropdown, darkMode } = useStateContext();

const lightModes = <MdOutlineLightMode className='text-2xl'/>
const darkModes = <MdOutlineDarkMode  className='text-2xl'/> 

  return (
    <div className={`w-full ${open? 'ml-0':''} lg:px-10`}>
        <div className='mt-4'  >
            <div className='bg-white dark:bg-slate-800 p-4 mx-4 rounded-md flex items-center justify-between align-center'>
                <button className='text-[#FB9678] items-center flex justify-start text-2xl font-bold lg:hidden' onClick={() =>setOpen(!open)}><HiBars3BottomRight /></button>
              <div className='flex-grow flex justify-end gap-4'>
                <div className='text-2xl text-[#FB9678]'>
                  {/* <FaRegUser/>
                  <LoginForm /> */}
                  <Popup />
                </div>
                {/* <div className='text-2xl flex items-center justify-center'>
                  <NavButton toggle={toggleDropdown} color="#FB9678"  icon={mode ==='dark'? darkModes: lightModes}/>
                </div>
                <div className=''>
                  <Mode />
                </div> */}
                <ToggleMode />
              </div>
            </div>

            
        </div>
    </div>
    
  )
}

export default Navbars