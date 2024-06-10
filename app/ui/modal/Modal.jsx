'use Client'
import React from 'react'

const Modal = ({isVisible, onClose}) => {
    if (! isVisible) return null

    const handleClose = (event) =>{
        if (event && event.target && event.target.id ==='wrapper')
        {
            onClose()
        } 
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick = {handleClose}>
        <div className='w-full md:w-1/4 flex flex-col'>
            <div className='bg-white p-2 rounded-md flex flex-col '>
                <div className=' text-xl place-self-end'>
                    <button onClick={() =>onClose()}>
                        X
                    </button>
                </div>
                <div>
                    Modal
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Modal