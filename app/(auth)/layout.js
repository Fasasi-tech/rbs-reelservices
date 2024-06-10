
import { Inter } from 'next/font/google'
// import './globals.css'
// import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
// import Navbar from '../ui/dashboard/Navbar/Navbar'
// import { ContextProvider } from '../context/ContextProvider'
// import { Provider } from 'react-redux'
// import StoreProvider from '../redux/provider'
import '../globals.css'
import Sidebar from '../ui/dashboard/Sidebar/Sidebar'
import Navbar from '../ui/dashboard/Navbar/Navbar'
import { ContextProvider, useStateContext } from '../context/ContextProvider'
import { Provider } from 'react-redux'
import StoreProvider from '../redux/provider'
import LoginNavbar from '../ui/loginNavbar/Navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={`${inter.className}`} >
            <div className=' bg-gray-100 dark:bg-black min-h-screen  overflow-x-hidden '>
              <div className='fixed z-10 w-full top-0 left-0 right-0 mb-8 ' >
                <LoginNavbar />
              </div>   
              {children}
            </div> 
        
        </body>
    </html>
  )
}