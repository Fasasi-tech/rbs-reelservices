import React from 'react'
import EditLeave from '../EditLeave/EditLeave'

const LeaveHistory = () => {
  return (
    <div>
        <table className='w-full mt-8 gap-x-10 border shadow-md'>
            <thead>
                <tr className='px-8 bg-[#ebbdb0] py-4 md:px-4 font-bold text-white'>
                    <td className='px-12 text-center py-4 lg:px-4'>Edit</td>
                    <td className='px-8 text-center lg:px-4'>User</td>
                    <td className='px-8 text-center lg:px-4'>Type</td>
                    <td className='px-8 text-center lg:px-4'>Year</td>
                    <td className='px-8 text-center lg:px-4'>Requested On</td>
                    <td className='px-8 text-center lg:px-4'>Period</td>
                    <td className='px-8 text-center lg:px-4'>Days</td>
                    <td className='px-8 text-center lg:px-4'>Status</td>
                    <td className='px-8 text-center lg:px-4'>Request Note</td>
                    <td className='px-8 text-center lg:px-4'>Updated At</td>
                    <td className='px-8 text-center lg:px-4'>Updated Notes</td>
                    <td className='px-8 text-center lg:px-4'>Updated By</td>
                </tr>
            </thead>
            <tbody>
                <tr className='mt-12 bg-white'>
                    <td className='px-8 py-4 text-center lg:px-4'><EditLeave /></td>
                    <td className='px-8 text-center lg:px-4'>Ridwan</td>
                    <td className='px-8 text-center lg:px-4'>Sick</td>
                    <td className='px-8 text-center lg:px-4'>2024</td>
                    <td className='px-8 text-center lg:px-4'>17/3/2024</td>
                    <td className='px-8 text-center lg:px-4'>20-2-2024 - 24-2-2024</td>
                    <td className='px-8 text-center lg:px-4'>4</td>
                    <td className='px-8 text-center lg:px-4'>Pending</td>
                    <td className='px-8 text-center lg:px-4'>I need a rest</td>
                    <td className='px-8 text-center lg:px-4'>7 minutes ago</td>
                    <td className='px-8 text-center lg:px-4'>Acknowledged</td>
                    <td className='px-8 text-center lg:px-4'>Fasasi</td>
                </tr>
                <tr className='mt-12 bg-gray-100'>
                    <td className='px-8 py-4 text-center lg:px-4'><EditLeave /></td>
                    <td className='px-8 text-center lg:px-4'>Israel</td>
                    <td className='px-8 text-center lg:px-4'>Paternity</td>
                    <td className='px-8 text-center lg:px-4'>2024</td>
                    <td className='px-8 text-center lg:px-4'>17/3/2024</td>
                    <td className='px-8 text-center lg:px-4'>20-2-2024 - 24-2-2024</td>
                    <td className='px-8 text-center lg:px-4'>4</td>
                    <td className='px-8 text-center lg:px-4'>Pending</td>
                    <td className='px-8 text-center lg:px-4'>My wife just put to bed</td>
                    <td className='px-8 text-center lg:px-4'>10 minutes ago</td>
                    <td className='px-8 text-center lg:px-4'>Acknowledged</td>
                    <td className='px-8 text-center lg:px-4'>Boluwatife</td>
                </tr>
            </tbody>
        
        
        </table> 
    </div>
  )
}

export default LeaveHistory