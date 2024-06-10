'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiCircleChevRight } from "react-icons/ci";
import { Menus } from "@/app/menus";
import { useStateContext } from "@/app/context/ContextProvider";
import { FaChevronCircleDown, FaChevronCircleRight } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
const {open, setOpen} = useStateContext()
const pathname = usePathname();
const isActive = (path) => path === pathname;
const [settingsOpen, setSettingsOpen] = useState(false);
const [windowWidth, setWindowWidth] = useState(null); 


const toggleSettings = () => {
  setSettingsOpen(!settingsOpen);
};



useEffect(() => {
  // If the sidebar is closed, collapse the settings section
  if (!open) {
    setSettingsOpen(false);
  }
}, [open]);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Set initial window width on component mount
  setWindowWidth(window.innerWidth);

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup function to remove event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



// Render nothing if windowWidth is null (server-rendered environment)
if (windowWidth === null) {
  return null;
}

const sidebarWidth = windowWidth > 1060 ? (open ? "w-72" : "w-20") : "w-72";
const sidebarVisibility = windowWidth <= 1060 ? (open ? "" : "hidden") : "";

  return (
    <>
    
    <div className={`flex z-10 bg-gray-100 dark:bg-slate-800 sticky top-0 h-screen ${sidebarVisibility}`}>
      <div className={` bg-gray-100 dark:bg-slate-800 p-5 pt-8  ${sidebarWidth}  relative shadow-lg duration-300 overflow-auto ${ open && 'overflow-y-scroll'} overflow-x-hidden`}>
        <CiCircleChevRight className={`bg-[#FB9678] text-white rounded-full text-3xl absolute -right-0 top-9 border border-white cursor-pointer ${!open && "rotate-180"}`}  onClick={() =>setOpen(!open)}/>
      <div className={`inline-flex text-3xl font-bold origin-left duration-300 ${!open && "scale-0"} `}>
        ReelService
      </div>
      <div className="mt-8">
        {Menus.map((menu)=>{
          return(
         <div key={menu.id} className='mt-4' title={menu.title}>
            {menu.title === "Settings" ? ( // Check if the menu item is Settings
                  <div className={`flex items-center justify-start gap-4 py-4 px-2 font-bold cursor-pointer rounded-lg ${!open && 'hover:bg-[#FB9678] hover:text-white'}`} >
                    <span className="text-2xl">{menu.icon}</span>
                    <div className="flex items-center justify-between gap-24" onClick={toggleSettings}>
                      <span className={`${!open && "hidden"}`}>{menu.title}</span> <span  className={`${!open && "hidden"} text-[16px] text-[#FB9678]`  }> {settingsOpen ? < FaChevronCircleDown  /> : <FaChevronCircleRight />}</span>
                    </div>
                  </div>
                ):
            (<Link href={menu.path} className={`flex items-center justify-start gap-4 py-4 px-2 font-bold ${isActive(menu.path)? 'bg-[#FB9678] p-4 rounded-lg text-white': ''}  cursor-pointer ${!open && 'hover:bg-[#FB9678] hover:text-white'} rounded-lg `}>
              <span className="text-2xl">
                {menu.icon}
              </span>
              <span className={`${!open && "hidden"}`} >
                {menu.title}
              </span>
            </Link>)}
            

            {menu.title === "Settings" && settingsOpen && (
                  <div className="ml-8">
                    <div className="pb-2">
                      <Link href='/inviteEmployees' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Create Employees
                      </Link>
                    </div>
                    <div className="pb-2">
                      <Link href='/CreateDepartment' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Create Department 
                      </Link>
                    </div>
                    <div className="pb-2">
                      <Link href='/CreateTeams' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Create a Team 
                      </Link>
                    </div>
                    <div className="pb-2">
                      <Link href='/Settings' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Create a Job 
                      </Link>
                    </div>
                    <div className="pb-2">
                      <Link href='/Leave-Types' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Leave Settings
                      </Link>
                    </div>
                    <div className="">
                      <Link href='/Settings' className="hover:text-[#FB9678] text-gray-400 font-medium ml-4">
                          Company Settings
                      </Link>
                    </div>
                  </div>
                )}
          </div>
        )})}
        <Link  href='' className="flex items-center justify-start gap-4 py-4 px-2 font-bold bg-gray-200 dark:bg-slate-800 rounded-lg mt-8">
              <span className="text-2xl">
              < CiLogout  />
              </span>
              <span className={`${!open && "hidden"} `}>
                Log out
              </span>
        </Link>
      </div>
      </div>
      {/* <div className="p-7 w-full">
        <h1 className="text-2xl font-semibold">yup</h1>
      </div>  */}
     </div>
     
     </>
  )
}

export default Sidebar