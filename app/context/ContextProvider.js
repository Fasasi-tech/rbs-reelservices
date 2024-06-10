'use client'
import React, {createContext, useContext, useState, useEffect} from 'react';
import { useTheme } from 'next-themes';
import Mode from '../ui/dashboard/Mode/Mode';
const StateContext = createContext();

const isBrowser = typeof window !== "undefined"; 
const initialOpenState = isBrowser ? localStorage.getItem("sidebarOpen") === "false" : false;

export const ContextProvider = ({children}) => {

    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const [open, setOpen] = useState(initialOpenState)
    const [mounted, setMounted] =useState(false)
    const [employeeList, setEmployeeList] = useState([])
    const [dropdownVisible, setDropdownVisible] = useState(false);
   const [darkMode, setDarkMode] = useState(savedMode ==='dark')

   useEffect(() => {
    setMounted(true);
  }, []);

    

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme ==="dark") setDarkMode(true)
    }, [])


    const addEmployeeData = (employeeData) =>{
      setEmployeeList((prevList) =>[...prevList, employeeData])
    }

    useEffect(()=>{
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

      const toggleDropdown = () => {
        setDropdownVisible((prevVisible) => !prevVisible);
      };
  
      const toggleDarkMode = ()=>{
        setDarkMode(true)
        setDropdownVisible(false);
      }
  
      const toggleWhiteMode = () =>{
        setDarkMode(false)
        setDropdownVisible(false);
      }

   
      
// useEffect(() => {
//     // Save the open state to local storage whenever it changes
//     if (isBrowser) {
//         localStorage.setItem("sidebarOpen", open.toString());
//       }
//     }, [open, isBrowser]);

// useEffect(() => {
//   // Save the open state to local storage whenever it changes
//   if (typeof window !== "undefined") {
//       localStorage.setItem("sidebarOpen", open.toString());
//   }
// }, [open]);
useEffect(() => {
  localStorage.setItem("sidebarOpen", open.toString());
}, [open]);

useEffect(() => {
  setOpen(localStorage.getItem("sidebarOpen") === "false");
}, []);

    return (
        <StateContext.Provider value={{open, setOpen,  toggleDarkMode, toggleWhiteMode, toggleDropdown, dropdownVisible, setDropdownVisible, darkMode, addEmployeeData, employeeList}}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)