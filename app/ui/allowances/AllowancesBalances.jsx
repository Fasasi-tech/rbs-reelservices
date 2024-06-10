'use client'
import React, {useState} from 'react'
import { IoMdSettings } from "react-icons/io";
import Modal from '../modal/Modal';

const AllowancesBalances = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <div>
        <table className='w-full lg:w-1/2 mt-8 gap-x-10 border shadow-md'>
            <thead>
                <tr className='px-8 py-2 md:px-4 font-bold border-b-2 border-gray-300'>
                    <td className='md:px-8 sm:px-2 py-2 text-left pl-2 lg:px-4' >2024</td>
                    <td className='md:px-8 sm:px-2 py-2  text-right pr-2 lg:px-4'>Allowance</td>
                </tr>
            </thead>
            <tbody >
                <tr className='mt-12 py-8 border-b-2 border-gray-300'>
                    <td className='md:px-8 sm:px-2 py-2 text-left lg:px-4'>Vacation</td>
                    <td className='md:px-8 sm:px-2 py-2 text-right lg:px-4 pr-2'>
                        <div className='flex items-center justify-end gap-2 '>
                            <p className='justify-self-end text-xl'>8</p>
                            <button onClick={() => setShowModal(true)}>
                                <IoMdSettings className='text-xl text-[#FB9678]' />
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className='mt-12 py-8'>
                    <td className='md:px-8 sm:px-2 py-2 text-left lg:px-4'>Sick Leave</td>
                    <td className='md:px-8 sm:px-2 py-2 text-right lg:px-4'>8</td>
                </tr>
            </tbody>
        </table>
    </div>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </>
  )
}

export default AllowancesBalances