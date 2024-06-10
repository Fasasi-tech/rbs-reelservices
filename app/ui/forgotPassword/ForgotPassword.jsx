'use client'
import React from 'react'
import { useFormik } from 'formik';

const ForgotPassword = () => {

    const validate = values => {
        const errors ={};
    
        if(!values.Email){
            errors.Email= 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
            errors.Email = 'Invalid email address';
        }
    
       
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            Email:"",
           
    
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
    <div className='px-4'>
        <form className='grid h-screen place-items-center'>
            <div className='lg:w-2/5 sm:w-full bg-white px-4 py-8 shadow-lg rounded-lg'>
                <p className='text-[#FB9678] font-semibold mb-8'> Enter your email address and we will send you a reset password link</p>
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
                <div className='w-full h-12 my-8 inline-block'>
                    <button type='submit' className={`bg-[#FB9678] w-full text-white md:text-2xl rounded-lg py-4 flex gap-3 items-center justify-center font-serif ${!formik.isValid || formik.isSubmitting ? 'opacity-50 cursor-not-allowed': ''}`}
                    disabled={!formik.isValid || formik.isSubmitting}> Reset Password</button>
                </div> 
            </div> 
             
        </form>
       
    </div>
  )
}

export default ForgotPassword