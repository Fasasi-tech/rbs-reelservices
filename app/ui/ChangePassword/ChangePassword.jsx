'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { FaKey } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import Link from 'next/link';

const validate = values => {
    const errors ={};
    if(!values.Current_Password){
        errors.Current_Password ='Required';
    } 
     if (values.Current_Password.length > 40){
        errors.Current_Password ='Must be 40 characters or less';

    } 
    
    if (values.Current_Password === values.New_Password){
        errors.New_Password ='Current password and new password are the same'
    }

    if (values.New_Password !== values.Confirm_New_Password){
        errors.Confirm_New_Password = 'Password does not match'
    }

    if (!values.New_Password){
        errors.New_Password ='Required';
    } else if (values.New_Password.length > 40){
        errors.New_Password = 'Must be 40 characters or less';
    }

    if (!values.Confirm_New_Password){
        errors.Confirm_New_Password ='Required';
    } else if (values.Confirm_New_Password.length > 40){
        errors.Confirm_New_Password = 'Must be 40 characters or less';
    }

    
    return errors;
}

const ChangePassword = () => {
    const formik = useFormik({
        initialValues:{
            Current_Password:"",
            Confirm_New_Password:"",
            New_Password:""
    
        },
        validate,
        onSubmit: (values, onSubmitProps) => {
    
            console.log(values)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            // router.push('/employees')
            // addEmployeeData(values)
            
        }
    })

    const [passwordView, setPasswordView ] = useState(false);
    const [passwordViewTwo, setPasswordViewTwo ] = useState(false);
    const [passwordViewThree, setPasswordViewThree ] = useState(false);

    const handleShowPassword = () =>{
        setPasswordView(!passwordView)
    }

    const handleShowPasswordTwo = () =>{
        setPasswordViewTwo(!passwordViewTwo)
    }

    const handleShowPasswordThree = () =>{
        setPasswordViewThree(!passwordViewThree)
    }
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='grid h-screen place-items-center'>   
        <div className='lg:w-2/5 sm:w-full bg-white p-12 shadow-lg rounded-lg relative'>
            <div className='flex justify-end'>
                <Link href='/MyAccount'>
                    <button className=' text-2xl  text-[#FB9678] '><GiCancel/></button>
                </Link>
            </div>
            <div className='w-full h-12 mb-12'>
                <label htmlFor="Current Password"  className='block text-base mb-2 text-gray-500 pl-2'>Current Password</label>
                <input 
                    name="Current_Password"
                    id="Current_Password"
                    type={passwordView ? 'text': 'password'} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Current_Password}
                    className='p-2 w-full outline-none border border-solid rounded-lg  text-gray-500 h-12 bg-none border-slate-300'
                />
                <div>
                    <button type='button'onClick={handleShowPassword} className='z-10 absolute top-[120px] right-16 text-2xl text-[#FB9678]'> {passwordView?<FaRegEyeSlash/>: <IoEyeOutline/>} </button>
                </div>
                    {formik.touched.Current_Password && formik.errors.Current_Password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Current_Password}</div>: null}

            </div>

            <div className='h-12 mb-12 w-full'>
                <label htmlFor="New Password" className='block text-base mb-2 text-gray-500 pl-2'>New Password</label>
                <input
                    type={passwordViewTwo ? 'text': 'password'}
                    name="New_Password"
                    id='New_Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.New_Password}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                />
                <div>
                    <button type='button'onClick={handleShowPasswordTwo} className='z-10 absolute top-[216px] right-16 text-2xl text-[#FB9678]'> {passwordViewTwo?<FaRegEyeSlash/>: <IoEyeOutline/>} </button>
                </div>
                    {formik.touched.New_Password && formik.errors.New_Password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.New_Password}</div>: null}
               
            </div>

            <div className='h-12 mb-12 w-full'>
                <label htmlFor="Confirm_New_Password" className='block text-base mb-2 text-gray-500 pl-2'>Confirm New Password</label>
                <input
                    type={passwordViewThree ? 'text': 'password'} 
                    name="Confirm_New_Password"
                    id='Last_Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Confirm_New_Password}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                />
                <div>
                    <button type='button'onClick={handleShowPasswordThree} className='z-10 absolute top-[308px] right-16 text-2xl text-[#FB9678]'> {passwordViewThree?<FaRegEyeSlash/>: <IoEyeOutline/>} </button>
                </div>
                    {formik.touched.Confirm_New_Password && formik.errors.Confirm_New_Password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Confirm_New_Password}</div>: null}

            </div>
            <div className='w-full h-12 my-8 inline-block'>
                <button type='submit' className={`bg-[#FB9678] w-full text-white font-serif md:text-2xl rounded-lg py-4 flex gap-3 items-center justify-center ${!formik.isValid || formik.isSubmitting ? 'opacity-50 cursor-not-allowed': ''}`}
                 disabled={!formik.isValid || formik.isSubmitting}> <FaKey /> Change Password</button>
            </div>    
        </div>
    </form>
    </div>
  )
}

export default ChangePassword