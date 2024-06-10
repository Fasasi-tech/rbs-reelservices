
import React from 'react'
import './employee.css'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
const EmployeeList = () => {
  return (
    <>
      <h1 className='mb-4 mt-8 text-3xl font-semibold text-[#FB9678]'>Pending Approvals</h1>
       {/* <table className='w-full gap-x-10'>
            <thead>
                <tr className='px-8 bg-[#ebbdb0] py-4 md:px-4 font-bold text-white'>
                    <td className='px-8 py-4 text-center lg:px-4  '>S/N</td>
                    <td className='px-8 text-center lg:px-4'>Employee ID</td>
                    <td className='px-12 text-center lg:px-4'>Name</td>
                    <td className='px-8 text-center lg:px-4'>Leave Type</td>
                    <td className='px-8 text-center lg:px-4'>Date Applied</td>
                    <td className='px-8 text-center lg:px-4'>Status</td>
            
                </tr>
            </thead>
            <tbody>
               <tr className='mt-12 bg-white'>
                    <td className='px-8 py-4 text-center lg:px-4'>1</td>
                    <td className='px-8 text-center lg:px-4'>RBS/23/0014</td>
                    <td className='px-12 text-center lg:px-4'>Fasasi Ridwan</td>
                    <td className='px-8 text-center lg:px-4'>Annual</td>
                    <td className='px-8 text-center lg:px-4'>23-04-2022</td>
                    <td className='px-8 text-center lg:px-4'><span className='bg-red-600 p-1 px-2 rounded-md text-white'>Pending</span></td>               
                </tr>
                <tr className='bg-gray-100'>
                    <td className='px-8 py-4 text-center md:px-4'>2</td>
                    <td className='px-8 text-center md:px-4'>RBS/23/0014</td>
                    <td className='px-12 text-center md:px-4'>Israel Boluwatife</td>
                    <td className='px-8 text-center md:px-4'>Annual</td>
                    <td className='px-8 text-center md:px-4'>23-04-2022</td>
                    <td className='px-8 text-center md:px-4'> <span className='bg-red-600 p-1 px-2 rounded-md text-white'>Pending</span></td>
                    
                </tr>
                <tr className='bg-white'>
                    <td className='px-8 py-4 text-center  md:px-4'>3</td>
                    <td className='px-8 text-center md:px-4'>RBS/23/0014</td>
                    <td className='px-12 text-center md:px-4'>Israel Boluwatife</td>
                    <td className='px-8 text-center md:px-4'>Annual</td>
                    <td className='px-8 text-center md:px-4'>23-04-2022</td>
                    <td className='px-8 text-center md:px-4'><span className='bg-red-600 p-1 px-2 rounded-md text-white'>Pending</span></td>
                    
                </tr>
                

                
            </tbody>

       </table> */}
      <div className='bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg overflow overflow-auto max-h-72'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> S/N</TableHead>
            <TableHead> Name</TableHead>
            <TableHead> Leave Type</TableHead>
            <TableHead>Date Applied</TableHead>
            <TableHead> Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Fasasi Ridwan</TableCell>
            <TableCell>Annual </TableCell>
            <TableCell>1/7/2024</TableCell>
            <TableCell ><p className='text-red-500 bg-red-200 p-1 w-20 text-center rounded-lg'>Pending</p></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </>
  )
}

export default EmployeeList