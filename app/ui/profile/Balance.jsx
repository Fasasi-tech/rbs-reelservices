import React from 'react'

const Balance = () => {
  return (
    <div>
     <table>
        <tr className='border-b-2'>
          <th className='px-12 py-2 text-center text-[#FB9678]'></th>
          <th className='px-12 py-2 text-center text-[#FB9678]'>Used</th>
          <th className='px-12 py-2 text-center text-[#FB9678]'>Available</th>
          <th className='px-12 py-2 text-center text-[#FB9678]'>Allowance</th>
        </tr>
        <tr className='border-b-2'>
          <td className='px-8 py-2 text-center'>Vacation</td>
          <td className='px-8 py-2 text-center'>0</td>
          <td className='px-8 py-2 text-center'>10</td>
          <td className='px-8 py-2 text-center'>10</td>
        </tr>
        <tr className='border-b-2'>
          <td className='px-8 py-2 text-center'>Sick Leave</td>
          <td className='px-8 py-2 text-center'>0</td>
          <td className='px-8 py-2 text-center'>63</td>
          <td className='px-8 py-2 text-center'>63</td>
        </tr>
        <tr className='border-b-2'>
          <td className='px-8 py-2 text-center'>Paternity Leave</td>
          <td className='px-8 py-2 text-center'>0</td>
          <td className='px-8 py-2 text-center'>30</td>
          <td className='px-8 py-2 text-center'>30</td>
        </tr>
        <tr className='border-b-2'>
          <td className='px-8 py-2 text-center'>Maternity Leave</td>
          <td className='px-8 py-2 text-center'>0</td>
          <td className='px-8 py-2 text-center'>90</td>
          <td className='px-8 py-2 text-center'>90</td>
        </tr>
     </table>
    </div>
  )
}

export default Balance