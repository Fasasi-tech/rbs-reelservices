'use client'
import React, {useState} from 'react'
import { Formik, useFormik } from 'formik';
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";


const validate = values =>{
    const errors={};
    if(!values.new_password){
        errors.new_password ='Required';

    }

    if(!values.confirm_password){
        errors.confirm_password ='Required';
        
    }

    if (values.new_password !== values.confirm_password){
        errors.confirm_password = 'Password does not match'
    }

    return errors

}
const ResetPassword = () => {
    const formik = useFormik({
        initialValues:{
            new_password:"",
            confirm_password:""
        },
        validate,
        onSubmit: (values, onSubmitProps) => {
            console.log(values)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }
    })

    const [passwordView, setPasswordView ] = useState(false);
    const [passwordViewTwo, setPasswordViewTwo ] = useState(false);

    const handleShowPassword = () =>{
        setPasswordView(!passwordView)
    }

    const handleShowPasswordTwo = () =>{
        setPasswordViewTwo(!passwordViewTwo)
    }
  return (
    <div className='px-4'>
        <form className='grid h-screen items-center md:place-items-center' onSubmit={formik.handleSubmit}>
            <div className='lg:w-2/5 sm:w-full bg-white px-4 py-8 shadow-lg rounded-lg relative'>
                <div className='w-full h-12 mb-12'>
                    <label htmlFor="New Password" className='block text-base mb-2 text-gray-500 pl-2'>New Password</label>
                    <input
                        name="new_password"
                        id="new_password"
                        type={passwordView ? 'text': 'password'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.new_password}
                        className='p-2 w-full outline-none border border-solid rounded-lg  text-gray-500 h-12 bg-none border-slate-300'
                    />
                    <div>
                        <button
                            type='button'
                            onClick={handleShowPassword}
                            className='z-10 absolute top-[76px] right-6 text-2xl text-[#FB9678]'
                        >
                            {passwordView?<FaRegEyeSlash/>: <IoEyeOutline/>} 
                        </button>
                    </div>
                    {formik.touched.new_password && formik.errors.new_password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.new_password}</div>: null}
                </div>
                <div className='w-full h-12 mb-12'>
                    <label htmlFor="Confirm Password" className='block text-base mb-2 text-gray-500 pl-2'>Confirm Password</label>
                    <input
                        name="confirm_password"
                        id="confirm_password"
                        type={passwordViewTwo ? 'text': 'password'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirm_password}
                        className='p-2 w-full outline-none border border-solid rounded-lg  text-gray-500 h-12 bg-none border-slate-300'
                    />
                    <div>
                        <button
                            type='button'
                            onClick={handleShowPasswordTwo}
                            className='z-10 absolute top-[172px] right-6 text-2xl text-[#FB9678]'
                        >
                             {passwordViewTwo?<FaRegEyeSlash/>: <IoEyeOutline/>} 
                        </button>
                    </div>
                        {formik.touched.confirm_password && formik.errors.confirm_password ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.confirm_password}</div>: null}
                </div>
                <div className='w-full h-12 my-8 inline-block'>
                <button type='submit' className={`bg-[#FB9678] w-full text-white font-serif md:text-2xl rounded-lg py-4 flex gap-3 items-center justify-center ${!formik.isValid || formik.isSubmitting ? 'opacity-50 cursor-not-allowed': ''}`}
                 disabled={!formik.isValid || formik.isSubmitting}> Reset Password</button>
            </div>
            </div>
        </form>

    </div>
  )
}

export default ResetPassword