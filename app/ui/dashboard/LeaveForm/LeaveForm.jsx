'use client'
import React, {useState} from 'react'
import {useFormik} from 'formik'

const validate = values =>{
    const errors={}
    if (!values.start_date){
        errors.start_date='Required'
    }

    if(!values.end_date){
        errors.end_date='Required'
    }

    if(!values.comments){
        errors.comments='Required'
    }

    return errors;
}


const LeaveForm = () => {
    
// const [form, setForm] = useState({
//     Leave_Type:"",
//     start_date:"",
//     end_date:"",
//     comments:"",
// }    
// )

const formik = useFormik({
    initialValues:{
        Leave_Type:"",
        start_date:"",
        end_date:"",
        comments:""
    },
    onSubmit: (values, onSubmitProps) => {
        console.log(values)
         onSubmitProps.setSubmitting(false)
         onSubmitProps.resetForm()
    },
    validate
})



// const [error, setError] = useState('')


// const handleChange = (e) => {
//     const {name, value} = e.target;
//     setForm({...form, [name]: value})

    

// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(form)
// }


  return (
<div className='w-full '>
    <form onSubmit={formik.handleSubmit}>
       
        <div className='lg:w-2/5 bg-white p-12 shadow-lg rounded-lg'>
            <div>
                <h1 className='text-gray-500 md:text-2xl font-semibold text-center pb-4'> Book Leave </h1>
            </div>
            <div className='w-full h-12 mb-12 '>
                <label htmlFor="Leave Type"  className='block text-base mb-2 text-gray-500 pl-2'>Leave Type</label>
                <select 
                    name="Leave_Type"
                    id="Leave_Type" 
                    value={formik.values.Leave_Type}
                    onChange={formik.handleChange} 
                    placeholder="Leave Type"
                    required
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none '>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Unpaid Leave">Unpaid Leave</option>
                    <option>Sick Leave</option>
                </select>
                    {/* <span className='text-4xl text-white text-opacity-80 bg-none absolute left-5 top-5 px-1 transition duration-200 input-text'>Leave Type</span> */}
                
                {/* <label className='absolute top-[10px] left-[8px] px-[5px] text-[#FB9678] duration-300 pointer-events-none bg-none'>Leave Type</label> */}
            </div>
            <div className='h-12 mb-12 w-full'>
                <label htmlFor="Start Date" className='block text-base mb-2 text-gray-500 pl-2'>Start Date</label>
                <input
                    type='date'
                    name="start_date"
                    id='start_date'
                    value={formik.values.start_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none '
                />
                 {formik.touched.start_date && formik.errors.start_date ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.start_date}</div>: null}

            </div>
            <div className='h-12 mb-12 w-full'>
                <label htmlFor="End Date" className='block text-base mb-2 text-gray-500 pl-2'>End Date</label>
                <input
                    type='date'
                    name="end_date"
                    id='end_date'
                    value={formik.values.end_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none'
                />
                 {formik.touched.end_date && formik.errors.end_date ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.end_date}</div>: null}
            </div>
            
            <div className='w-full h-12 my-8 mb-12'>
                <label htmlFor="comment"  className='block text-base mb-2 text-gray-500 pl-2'>Comment</label>
                <textarea
                     name='comments'
                    id='comments'
                    value={formik.values.comments}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='p-2 w-full  outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-20 bg-none'
                />
                 {formik.touched.comments && formik.errors.comments ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.comments}</div>: null}
            </div> 
            <div className='w-full h-12 my-8 pt-4 inline-block'>
                <button type="submit" className={`bg-[#FB9678] w-full text-white text-2xl rounded-lg py-4 ${!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''}`} disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </div>
            
        </div>
    </form>
</div>
  ) 
}

export default LeaveForm