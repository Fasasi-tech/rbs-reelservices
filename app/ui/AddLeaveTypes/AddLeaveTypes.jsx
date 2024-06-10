'use client'
import React, {useState} from 'react'
import { useFormik } from 'formik'
import { color } from '../ColorPicker';
import { BsCheck } from 'react-icons/bs';

const validate = values => {
    const errors={};
  
    if(!values.Name){
        errors.Name ='Required';
    } 
  
  
    if(!values.Allowance){
        errors.Allowance ='Required';
  
    }
    if(!values.Description){
        errors.Description ='Required';
    }

    if (!values.Color) {
        errors.Color = 'Required';
    }
  
    return errors;
  
  }
const AddLeaveTypes = () => {

    const [selectedColor, setSelectedColor] = useState(null);

    const formik = useFormik({
        initialValues:{
            Name:'',
            Allowance:'',
            Description:'',
            Color:''
           
            
        },
        validate,
        onSubmit: (values, onSubmitProps) => {
            values.Color = selectedColor;
            console.log(values)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()    
        }
    })
    const handleColorClick = (colorValue) => {
        setSelectedColor(colorValue);
        formik.setFieldValue('Color', colorValue); // Update Color field value
    };
  return (
    <div className='lg:w-1/2 lg:mx-auto bg-white p-8 mt-8 mb-8 rounded-lg'>
    <form  onSubmit={formik.handleSubmit} className='flex flex-col min-h-[25rem]'>
        <div className=' p-0 lg:p-8 flex-1'>
        
        <div className='grid '>
            <div className='h-12 mb-12 w-full'>
                <label htmlFor='Name' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Name</label>
                <input
                type='text'
                name='Name'
                id='Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
                placeholder='Name'
                className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none  ${ formik.touched.Name && formik.errors.Name?'border-red-500':''}`}
                />
                    {formik.touched.Name && formik.errors.Name ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Name} </div> : null }
            </div>
            <div className='h-12 mb-12 w-full' >
                <label htmlFor='Allowance' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Allowance</label>
                <input
                    type='text'
                    name='Allowance'
                    id='Allowance'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Allowance}
                    placeholder='Allowance'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none  ${ formik.touched.Allowance && formik.errors.Allowance ?"border-red-500":''}`}
                /> 
                {formik.touched.Allowance && formik.errors.Allowance ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Allowance} </div> : null }
            </div>
            <div className="flex gap-2 flex-wrap flex-auto">
                {color.map((item, index) =>(
                    <div
                        className="relative my-2  cursor-pointer flex gap-2 items-center"
                        key={item.name}
                    >
                        <button
                        type="button"
                        className="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: item.color }}
                        onClick={() => handleColorClick(item.color)}
                        >
                            {selectedColor === item.color && (
                            <BsCheck className="text-center text-2xl text-white" />
                        )}
                        </button>
                       </div>   
                ))}
                {formik.touched.Color && formik.errors.Color ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Color}</div> : null} {/* Error message for color selection */}
            <input
                type="hidden"
                name="Color"
                value={formik.values.Color}
            />
            </div>
            <div className='h-12 mb-28 w-full flex-1 min-h-full'>
                <label htmlFor='Description' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Description</label>
                <textarea
                 style={{ height: '100%' }}
                type='text'
                name='Description'
                id='Description'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Description}
                placeholder='Description'
                className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none ${formik.touched.Description && formik.errors.Description?'border-red-500':''}`}
                />
                {formik.touched.Description && formik.errors.Description ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Description} </div> : null }
            </div>
        </div>
        <div className='w-full h-12 my-8 inline-block mt-16'>
            <button type="submit" className={`bg-[#FB9678] w-full text-white text-2xl rounded-lg py-4 font-serif ${!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''}`} disabled={!formik.isValid || formik.isSubmitting}>Add Leave Type</button>
        </div>
        </div>
    </form>
    </div>
  )
}

export default AddLeaveTypes