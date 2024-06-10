 'use client'

import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../slices/authActions';
import { useGetProtectedDataQuery } from '../slices/usersApiSlice';
import Loader from '../dashboard/Loader';
import { GoSignOut } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';


const LoginForm = () => {
 
    const dispatch = useDispatch()
    const {isAuthenticated, user} = useSelector((state) => state.auth)
    const { instance, accounts } = useMsal();


      const handleSignIn = () => {
        dispatch(signIn(instance, accounts));
    };

    const handleSignOut = () => {
      dispatch(signOut(instance));
    };
  return (
    <div>
         {isAuthenticated ? (
        <div className='items-center justify-between gap-2'>
          <p className='pl-2  font-serif'>
            {user.name}
          </p>
          <button onClick={handleSignOut} className='rounded-md  p-2 flex items-center gap-2'><GoSignOut className='text-[#FB9678]'/><span className='font-serif hover:text-[#FB9678]'>Sign Out</span></button>
          <Link href='/profile'><div className='flex items-center gap-2 pl-2 hover:text-[#FB9678]'><span className='text-[#FB9678]'><FaRegUser/></span>profile</div></Link>
        </div>
      ) : (
        <button onClick={handleSignIn} className='items-center flex justify-center w-full'>
         <p className=' px-8 rounded-lg py-2 text-white flex items-center gap-2 hover:text-[#FB9678] transition-all'><span><FaRegUser className='text-[#FB9678]'/></span>Sign In</p> 
        </button>
      )}
    </div>
  )
}

export default LoginForm