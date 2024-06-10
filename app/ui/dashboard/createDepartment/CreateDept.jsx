'use client'
import React from 'react'
import { useStateContext } from '@/app/context/ContextProvider';
import { useFormik } from 'formik';



const validate = values => {
    const errors ={};
    if(!values.Name){
        errors.Name ='Required';
    } else if (values.Name.length > 30){
        errors.Name ='Must be 30 characters or less';
    }

    if (!values.HOD){
        errors.HOD ='Required';
    } else if (values.HOD> 40){
        errors.HOD = 'Must be 40 characters or less';
    }

  

    if (!values.Description){
        errors.Description = 'Required'
    }
    return errors;
}


const CreateDept = () => {
const {addEmployeeData} = useStateContext()

const formik = useFormik({
    initialValues:{
        Name:"",
        HOD:"",
        Description:"",
        

    },
    validate,
    onSubmit: (values, onSubmitProps) => {
    console.log(values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()       
    }
})

  return (
<div className='w-full'>
    <form onSubmit={formik.handleSubmit} className='grid h-screen place-items-center'>   
        <div className='lg:w-2/5 sm:w-full bg-white p-12 shadow-lg rounded-lg '>
            <div className='w-full h-12 mb-12'>
                <label htmlFor="Name"  className='block text-base mb-2 text-gray-500 pl-2'>Name</label>
                <input 
                    name="Name"
                    id="Name"
                    type='text' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                    className='p-2 w-full outline-none border border-solid rounded-lg  text-gray-500 h-12 bg-none border-slate-300'
                />
                    {formik.touched.Name && formik.errors.Name ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.Name}</div>: null}

            </div>

            <div className='h-12 mb-12 w-full'>
                <label htmlFor="HOD" className='block text-base mb-2 text-gray-500 pl-2'>HOD</label>
                <select
                    name="HOD"
                    id='HOD'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.HOD}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'>
                    <option value="Ridwan">Ridwan</option>
                    <option value="Israel">Israel</option>
                    <option value="Samuel">Samuel</option>       
                </select>
                {formik.touched.HOD && formik.errors.HOD ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.HOD}</div>: null}

            </div>
            <div className='w-full h-12 my-8 mb-12'>
                <label htmlFor="Description"  className='block text-base mb-2 text-gray-500 pl-2'>Description</label>
                <textarea
                     name='Description'
                    id='Description'
                    value={formik.values.Description}
                    onChange={formik.handleChange}
                    className='p-2 w-full  outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-20 bg-none'
                />
            </div> 
            <div className='w-full h-12 my-8 inline-block'>
                <button type='submit' className={`bg-[#FB9678] w-full text-white md:text-2xl rounded-lg py-4 flex gap-3 items-center justify-center font-semibold ${!formik.isValid || formik.isSubmitting ? 'opacity-50 cursor-not-allowed': ''}`}
                 disabled={!formik.isValid || formik.isSubmitting}>  Create Department</button>
            </div>    
        </div>
    </form>
</div>
  )
}
export default CreateDept


