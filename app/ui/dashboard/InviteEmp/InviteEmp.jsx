'use client'
import React, {useState, useRef, useEffect} from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'
import { IoPersonAddSharp } from "react-icons/io5";
import { useStateContext } from '@/app/context/ContextProvider';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'

const validate = values => {
    const errors ={};
    if(!values.First_Name){
        errors.First_Name ='Required';
    } else if (values.First_Name.length > 20){
        errors.First_Name ='Must be 20 characters or less';
    }

    if (!values.Last_Name){
        errors.Last_Name ='Required';
    } else if (values.Last_Name.length > 30){
        errors.Last_Name = 'Must be 30 characters or less';
    }

    if(!values.Email){
        errors.Email= 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid email address';
    }

    if (!values.Employment_Date){
        errors.Employment_Date = 'Required'
    }
    return errors;
}


const InviteEmp = () => {
const router = useRouter()
const {addEmployeeData} = useStateContext()

const formik = useFormik({
    initialValues:{
        Email:"",
        First_Name:"",
        Last_Name:"",
        Employment_Date:'',

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


  return (
<div className='w-full'>
    <form onSubmit={formik.handleSubmit} className='grid h-screen place-items-center'>   
        <div className='lg:w-2/5 sm:w-full bg-white p-12 shadow-lg rounded-lg '>
            <div className='w-full h-12 mb-12'>
                <label htmlFor="Email"  className='block text-base mb-2 text-gray-500 pl-2'>Email</label>
                <input 
                    name="Email"
                    id="Email"
                    type='email' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email}
                    className='p-2 w-full outline-none border border-solid rounded-lg  text-gray-500 h-12 bg-none border-slate-300'
                />
                    {formik.touched.Email && formik.errors.Email ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Email}</div>: null}

            </div>

            <div className='h-12 mb-12 w-full'>
                <label htmlFor="First_Name" className='block text-base mb-2 text-gray-500 pl-2'>First Name</label>
                <input
                    type='text'
                    name="First_Name"
                    id='First_Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.First_Name}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                />
                    {formik.touched.First_Name && formik.errors.First_Name ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.First_Name}</div>: null}

            </div>

            <div className='h-12 mb-12 w-full'>
                <label htmlFor="Last_Name" className='block text-base mb-2 text-gray-500 pl-2'>Last Name</label>
                <input
                    type='text' 
                    name="Last_Name"
                    id='Last_Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Last_Name}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                />
                    {formik.touched.Last_Name && formik.errors.Last_Name ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Last_Name}</div>: null}

            </div>
            
            <div className='w-full h-12 my-8 mb-12'>
                <label htmlFor="Employment_Date"  className='block text-base mb-2 text-gray-500 pl-2'>Employment Date</label>
                <input
                    type='date'
                    name='Employment_Date'
                    id='Employment_Date'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.Employment_Date}
                    className='p-2 w-full  outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                    required
                />
                    {formik.touched.Employment_Date && formik.errors.Employment_Date ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Employment_Date}</div>: null}
            </div>
            <div className='w-full h-12 my-8 inline-block'>
                <button type='submit' className={`bg-[#FB9678] w-full text-white md:text-2xl rounded-lg py-4 flex gap-3 items-center justify-center ${!formik.isValid || formik.isSubmitting ? 'opacity-50 cursor-not-allowed': ''}`}
                 disabled={!formik.isValid || formik.isSubmitting}> <IoPersonAddSharp /> Invite Employee</button>
            </div>    
        </div>
    </form>
</div>
  )
}

export default InviteEmp