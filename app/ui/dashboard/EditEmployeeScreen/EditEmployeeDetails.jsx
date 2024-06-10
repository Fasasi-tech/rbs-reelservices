import React from 'react'
import {useFormik} from 'formik'
import { FaTimesCircle } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const validate = values => {
    const errors={};

    if(!values.email){
        errors.email='Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email= 'Invalid email address'
    }

    if(!values.First_Name){
        errors.First_Name ='Required';
    } else if (values.First_Name.length > 20){
        errors.First_Name ='Must be 20 characters or less';
    }

    if(!values.Middle_Name){
        errors.Middle_Name ='Required';
    } else if (values.Middle_Name.length > 20){
        errors.Middle_Name ='Must be 20 characters or less';
    }

    if(!values.Employee_Number){
        errors.Employee_Number ='Required';
    } else if (values.Employee_Number.length > 20){
        errors.Employee_Number ='Must be 30 characters or less';
    }

    if(!values.Gender){
        errors.Gender ='Required';
    }
    if(!values.Job){
        errors.Job ='Required';
    }else if (values.Job.length < 3 || values.Job.length > 20){
        errors.Job ='Must be greater than 2 and less than 20';
    }

    if(!values.Team){
        errors.Team ='Required';
    }else if (values.Team.length < 3 || values.Team.length > 20){
        errors.Team ='Must be greater than 2 and less than 20';
    }
    if(!values.Department){
        errors.Team ='Required';
    }else if (values.Department.length < 3 || values.Department.length > 20){
        errors.Team ='Must be greater than 2 and less than 20';
    }

    if(!values.d_o_b){
        errors.d_o_b ='Required';
    }
    
    if(!values.Marital_Status){
        errors.Marital_Status ='Required';
    }

    if(!values.Religion){
        errors.Religion ='Required';
    } 

    if(!values.Employment_Date){
        errors.Employment_Date ='Required';
    }
    
    if(!values.Resignation_Date){
        errors.Resignation_Date ='Required';
    }

    if(!values.isAdmin){
        errors.isAdmin ='Required';
    }

    return errors;
    

}
const EditEmployeeDetails = ({cancelEditScreen, employee}) => {
    const formik = useFormik({
        initialValues:{
            email:'',
            First_Name:'',
            Middle_Name:'',
            Employee_Number:employee.id,
            Gender:'',
            Job:'',
            Team:'',
            Department:'',
            team:'',
            d_o_b:'',
            Marital_Status:'',
            Religion:'',
            Employment_Date:'',
            Resignation_Date:'',
            isAdmin:''
        },
        validate,
        onSubmit: (values, onSubmitProps) => {

            console.log(values)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
          
            
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-end text-2xl mb-8'>
                <button onClick={cancelEditScreen}>
                    <FaTimesCircle className='text-[#FB9678]' />
                </button>
            </div>
            <div className='grid lg:grid-cols-2 gap-x-8'>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='email' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Email</label>
                    <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='email'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.email && formik.errors.email?'border-red-500':''}`}
                    />
                        {formik.touched.email && formik.errors.email ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.email} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full' >
                    <label htmlFor='First Name' className='block text-base mb-2 text-gray-500 pl-2 w-full'>First Name</label>
                    <input
                    type='text'
                    name='First_Name'
                    id='First_Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.First_Name}
                    placeholder='First Name'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.First_Name && formik.errors.First_Name ?"border-red-500":''}`}
                    />
                    {formik.touched.First_Name && formik.errors.First_Name ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.First_Name} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Middle Name' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Middle Name</label>
                    <input
                    type='text'
                    name='Middle_Name'
                    id='Middle_Name'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Middle_Name}
                    placeholder='Middle Name'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.Middle_Name && formik.errors.Middle_Name?'border-red-500':''}`}
                    />
                    {formik.touched.Middle_Name && formik.errors.Middle_Name ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Middle_Name} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Employee Number' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Employee Number</label>
                    <input
                    type='text'
                    name='Employee_Number'
                    id='Employee_Number'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Employee_Number}
                    placeholder='Employee Number'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.Employee_Number && formik.errors.Employee_Number?'border-red-500':''}`}
                    />
                    {formik.touched.Employee_Number && formik.errors.Employee_Number ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Employee_Number} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Gender' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Gender</label>
                    <input
                    type='text'
                    name='Gender'
                    id='Gender'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Gender}
                    placeholder='Gender'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Gender && formik.errors.Gender?'border-red-500':''}`}
                    />
                    {formik.touched.Gender && formik.errors.Gender ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Gender} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Job' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Job</label>
                    <input
                    type='text'
                    name='Job'
                    id='Job'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Job}
                    placeholder='Job'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Job && formik.errors.Job?'border-red-500':''}`}
                    />
                    {formik.touched.Job && formik.errors.Job ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Job} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Team' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Team</label>
                    <input
                    type='text'
                    name='Team'
                    id='Team'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Team}
                    placeholder='Team'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Team && formik.errors.Team?'border-red-500':''}`}
                    />
                    {formik.touched.Team && formik.errors.Team ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Team} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Department' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Department</label>
                    <input
                    type='text'
                    name='Department'
                    id='Department'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Department}
                    placeholder='Department'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Department && formik.errors.TDepartment?'border-red-500':''}`}
                    />
                    {formik.touched.Department && formik.errors.Department ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Department} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='D.O.B' className='block text-base mb-2 text-gray-500 pl-2 w-full'>D.O.B</label>
                    <input
                    type='date'
                    id='d_o_b'
                    name='d_o_b'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.d_o_b}
                    placeholder='D.O.B'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.d_o_b && formik.errors.d_o_b?'border-red-500':''}`}
                    />
                    {formik.touched.d_o_b && formik.errors.d_o_b ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.d_o_b} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Marital Status' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Marital Status</label>
                    <input
                    type='text'
                    id='Marital_Status'
                    name='Marital_Status'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Marital_Status}
                    placeholder='Marital Status'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Marital_Status && formik.errors.Marital_Status?'border-red-500':''}`}
                    />
                    {formik.touched.Marital_Status && formik.errors.Marital_Status ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Marital_Status} </div> : null }
                </div> 
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Religion' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Religion</label>
                    <input
                    type='text'
                    id='Religion'
                    name='Religion'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Religion}
                    placeholder='Religion'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.Religion && formik.errors.Religion?'border-red-500':''}`}
                    />
                    {formik.touched.Religion && formik.errors.Religion ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Religion} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Employment Date' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Employment Date</label>
                    <input
                    type='date'
                    id='Employment_Date'
                    name='Employment_Date'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Employment_Date}
                    placeholder='Employment Date'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.Employment_Date && formik.errors.Employment_Date?'border-red-500':''}`}
                    />
                    {formik.touched.Employment_Date && formik.errors.Employment_Date ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Employment_Date} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Resignation Date' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Resignation Date</label>
                    <input
                    type='date'
                    id='Resignation_Date'
                    name='Resignation_Date'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Resignation_Date}
                    placeholder='Resignation Date'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${ formik.touched.Resignation_Date && formik.errors.Resignation_Date?'border-red-500':''}`}
                    />
                    {formik.touched.Resignation_Date && formik.errors.Resignation_Date ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Resignation_Date} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='isAdmin' className='block text-base mb-2 text-gray-500 pl-2 w-full'>isAdmin</label>
                    <input
                    type='text'
                    id='isAdmin'
                    name='isAdmin'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.isAdmin}
                    placeholder='isAdmin'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none bg-gray-100 ${formik.touched.isAdmin && formik.errors.isAdmin?'border-red-500':''}`}
                    />
                    {formik.touched.isAdmin && formik.errors.isAdmin ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.isAdmin} </div> : null }
                </div>
            </div>
            <div className='w-full h-12 my-8 inline-block'>
                <button type="submit" className={`bg-[#FB9678] w-full text-white text-2xl rounded-lg py-4 ${!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''}`} disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default EditEmployeeDetails