"use client"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import DialogWrapper from "@/componentss/Common/DialogWrapper"
import { useState } from "react";
import {useFormik} from 'formik'
import { Button } from "@/components/ui/button";


const validate = values =>{
  const errors={}
  if (!values.status){
      errors.status='Required'
  }

  

  return errors;
}

const EditLeave = () => {
    const [open, setOpen] = useState(false);

    const formik = useFormik({
      initialValues:{
          status:"",
          notes:""
          
      },
      onSubmit: (values, onSubmitProps) => {
          console.log(values)
           onSubmitProps.setSubmitting(false)
           onSubmitProps.resetForm()
      },
      validate
  })
  
  return (
    <DialogWrapper
        btnTitle="Edit"
        title="Edit Leave"
        isBtn={true}
        open={open}
        setOpen={() => setOpen(!open)}
        
    >
        <form>
          <div className='w-full h-12 mb-12 '>
            <label htmlFor="status"  className='block text-base mb-2 text-gray-500 pl-2'>Status</label>
            <select 
              name="status"
              id="status" 
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              placeholder="Status"
              required
              className='p-2 w-full outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-12 bg-none '>
              <option value=""></option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
            {formik.touched.status && formik.errors.status ?<div className='text-red-500 pl-2 font-semibold'>{formik.errors.status}</div>: null}
          </div>
          <div className='w-full h-12 my-8 mb-12'>
                <label htmlFor="Notes"  className='block text-base mb-2 text-gray-500 pl-2'>Notes</label>
                <textarea
                     name='notes'
                    id='notes'
                    value={formik.values.notes}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='p-2 w-full  outline-none border border-solid rounded-lg border-slate-300 text-gray-500 h-20 bg-none'
                />
            </div>
            <div className="pt-8">
              <p>Add extra notes</p>
            </div>
            <div className="pt-2">
              <Button type="submit" variant='destructive' className={!formik.isValid || formik.isSubmitting? 'opacity-50 cursor-not-allowed':''} disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
            </div>
           
        </form>

    </DialogWrapper> 
  )
}

export default EditLeave