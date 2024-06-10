
import React from 'react'
import {useFormik} from 'formik'
import { FaTimesCircle } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Countries } from './countries';

const validate = values => {
    const errors={};

    if(!values.Email){
        errors.Email='Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)){
        errors.Email= 'Invalid email address'
    }

    if(!values.State){
        errors.State ='Required';
    } 


    if(!values.Country){
        errors.Country ='Required';
    }

    if(!values.Business_year_starts_on){
        errors.Business_year_starts_on ='Required';
    }
    

    if(!values.Address){
        errors.Address ='Required';
    } 

    if(!values.Phone){
        errors.Phone ='Required';
    }else if(!/^\d{11}$/i.test(values.Phone)) {
        errors.Phone='Invalid phone number!'
    }

    return errors;

}

const EditCompanyDetails = ({cancelEditScreen}) => {
   
    const formik = useFormik({
        initialValues:{
            Country:'',
            State:'',
            Business_year_Starts_on:'',
            Email:'',
            Address:'',
            Phone:'',
            
        },
        validate,
        onSubmit: (values, onSubmitProps) => {

            console.log(values)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()    
        }
    })
    
    console.log(Countries)

    // useEffect (() => {
    //     const fetchCountries = async ()=>{
    //         try{
    //             const response = await fetch('https://restcountries.com/v3.1/all');
    //             const data = await response.json()
    //             const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    //             setCountries(sortedCountries)
    //         }
    //         catch(err){
    //             console.err('Error fetching data', err)
    //         }
           
    //     } 
    //     fetchCountries()
    // }, []);

    // const handleCountryChange = async event => {
    //     const countryCode = event.target.value;
    //     formik.handleChange(event); // Update Formik state
    
    //     try {
    //       const response = await fetch(`https://api.country.com/states/${countryCode}`);
    //       const data = await response.json();
    //       const sortedCity= data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    //       setStates(sortedCity);
    //     } catch (error) {
    //       console.error('Error fetching states:', error);
    //     }
    //   };



    


  return (
    <div className='lg:w-1/2 lg:mx-auto bg-white p-8 mt-8 mb-8 rounded-lg'>
        <form  onSubmit={formik.handleSubmit}>
            <div className='  p-0 lg:p-8 '>
            <div className='flex justify-end text-2xl mb-8 '>
                <button onClick={cancelEditScreen}>
                    <FaTimesCircle className='text-[#FB9678]' />
                </button>
            </div>
            <div className='grid '>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Email' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Email</label>
                    <input
                    type='Email'
                    name='Email'
                    id='Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email}
                    placeholder='Email'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none  ${ formik.touched.Email && formik.errors.Email?'border-red-500':''}`}
                    />
                        {formik.touched.Email && formik.errors.Email ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Email} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full' >
                    <label htmlFor='Country' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Country</label>
                    <select
                        type='text'
                        name='Country'
                        id='Country'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Country}
                        placeholder='Country'
                        className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none  ${ formik.touched.Country && formik.errors.Country ?"border-red-500":''}`}
                    > 
                    <option value=''>Select Country</option>
                    {Countries.map(country => (
                        <option key={country.code2} value={country.code2} >
                        {country.name}
                        </option>
                    ))}
                    </select>
                    {formik.touched.Country && formik.errors.Country ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Country} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full' >
                    <label htmlFor='State' className='block text-base mb-2 text-gray-500 pl-2 w-full'>City</label>
                    <select
                    type='text'
                    name='State'
                    id='State'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.State}
                    placeholder='State'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none  ${ formik.touched.State && formik.errors.State ?"border-red-500":''}`}
                    > 
                        <option value=''>Select State</option>
                        {Countries.find(country =>country.code2 === formik.values.Country)?.states.map(state => (
                        <option key={state.code} value={state.code}>{state.name}</option>
                        ))}
                    </select>
                    {formik.touched.State && formik.errors.State ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.State} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Phone' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Phone</label>
                    <input
                    type='text'
                    name='Phone'
                    id='Phone'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Phone}
                    placeholder='Phone'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none ${formik.touched.Phone && formik.errors.Phone?'border-red-500':''}`}
                    />
                    {formik.touched.Phone && formik.errors.Phone ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Phone} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Business year starts on' className='block text-base mb-2 text-gray-500 pl-2 w-full'>'Business year starts on</label>
                    <input
                    type='text'
                    name='Business_year_starts_on'
                    id='Business_year_starts_on'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Business_year_starts_on}
                    placeholder='Business year starts on'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none ${formik.touched.Business_year_starts_on && formik.errors.Business_year_starts_on?'border-red-500':''}`}
                    />
                    {formik.touched.Business_year_starts_on && formik.errors.Business_year_starts_on ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Business_year_starts_on} </div> : null }
                </div>
                <div className='h-12 mb-12 w-full'>
                    <label htmlFor='Gender' className='block text-base mb-2 text-gray-500 pl-2 w-full'>Address</label>
                    <input
                    type='text'
                    name='Address'
                    id='Address'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Address}
                    placeholder='Address'
                    className={`p-2 w-full outline-none border border-solid border-slate-300 text-gray-500 h-12 bg-none ${ formik.touched.Address && formik.errors.Address?'border-red-500':''}`}
                    />
                    {formik.touched.Address && formik.errors.Address ? <div className='text-red-500 pl-2 font-semibold'>{formik.errors.Address} </div> : null }
                </div>
            </div>
            <div className='w-full h-12 my-8 inline-block'>
                <button type="submit" className={`bg-[#FB9678] w-full text-white text-2xl rounded-lg py-4 ${!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''}`} disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}


export default  EditCompanyDetails