"use client"
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { saveAs } from 'file-saver';
import {axios} from 'axios'
import * as XLSX from 'xlsx';
import EmployeesTable from '../EmployeesTable/EmployeesTable';
import { UseDispatch, useSelector } from 'react-redux';
import { useGetEmployeesQuery } from '../../slices/usersApiSlice';
import Loader from '../Loader';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {FaDownload, FaLongArrowAltDown, FaLongArrowAltUp, FaFilter } from 'react-icons/fa'
import Pagination from '../../Pagination/Pagination';
import Filter from '../../filter/Filter';
import Image from 'next/image'
import  xls from '../../../../public/xls.png'
 import pdf from '../../../../public/pdfnewremove.png'
 import csv from '../../../../public/csvnew-removebg-preview.png'



const Employees =() => {
const [Page, setPage] = useState(1);
const [totalPage, setTotalPages] = useState(0)
const [asc, setAsc] = useState(true)
const [filter, setFilter] = useState(false)
const  {data:employees, isLoading, error}= useGetEmployeesQuery()
 


    if (isLoading){
        return <Loader />
    }

    if (error){
        return <div> oops, Something went wrong: {error.toString()}</div>
    }
   
    

    const exportToExcel = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const ws = XLSX.utils.table_to_sheet(document.querySelector('table'));
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const excelData = new Blob([excelBuffer], { type: fileType });
        const fileName = 'employee_data' + fileExtension;

        saveAs(excelData, fileName);
    };

    const table = document.querySelector('table');
    const doc = new jsPDF();
    autoTable(doc, {html:table})
    const exportToPDF = () => {
    const doc = new jsPDF()
    autoTable(doc, {html:table})
    doc.save('table.pdf')  
    };

    const exportToCSV = () => {
        const fileType = 'text/csv;charset=UTF-8';
        const fileExtension = '.csv';
    
        const csvData = [];
        const rows = document.querySelectorAll('table tr');
        rows.forEach(row => {
            const rowData = [];
            row.querySelectorAll('td, th').forEach(cell => {
                rowData.push(cell.innerText);
            });
            csvData.push(rowData.join(','));
        });
        const csvString = csvData.join('\n');
        const csvDataBlob = new Blob([csvString], { type: fileType });
        const fileName = 'employee_data' + fileExtension;
        saveAs(csvDataBlob, fileName);
    };

    console.log(employees)

    const handleToggleSort = () =>{
        setAsc(!asc)
    }

    const handleFilter = () =>{
        setFilter(prevState => !prevState)
    }

console.log(filter)

  return (
    <div>
        <div className='flex gap-4 items-center justify-between mt-8  w-full '>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex-none'>
                    <Link href='/inviteEmployees' className='flex  items-center gap-2 font-semibold text-[#FB9678] transition-all border  border-[#FB9678] border-solid hover:bg-[#FB9678] max-w-52 rounded-md hover:text-white p-2 '>
                        <IoPersonAddSharp /> <p className='lg:block hidden'>Invite Employees</p>
                    </Link>
                </div>
                <div className='flex items-center justify-between gap-2'>
                   <button className=' text-[#FB9678] font-medium flex items-center justify-between' onClick={handleToggleSort}>  {asc ? <FaLongArrowAltUp/> : <FaLongArrowAltDown/>}  <p className='hidden md:block pl-2'>Name </p></button>
                   <div>
                   <button className=' text-[#FB9678] font-medium flex items-center justify-between' onClick={handleFilter}> <FaFilter /> <p className='md:block hidden pl-2'>Filter</p> </button>
                     {filter && (<div className='absolute top-68 left-0 lg:left-20 mt-8 ml-2 z-50 lg:pl-8 flex-auto lg:mr-12'><Filter/></div>)}
                   </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-6'>
                <div className=' flex items-center gap-1 justify-end'>
                    <button onClick={exportToExcel}>
                        <div className='relative h-8 w-8 sm:h-6 sm:w-6 flex justify-center items-center'>
                            {/* <p className='text-[#FB9678] font-semibold'>XLSX</p> */}
                            <Image
                                src={xls} 
                                
                                alt='xlxs'
                            />
                            {/* <FaDownload className='text-[#FB9678]'/> */}
                        </div>    
                    </button>
                    <button onClick={exportToPDF} className='text-[#4169E1] font-semibold'>
                        <div className='relative h-16 w-16 sm:h-16 sm:w-16 flex justify-center items-center'>
                            <Image
                                src={pdf}
                                
                                alt='pdf'
                            />
                        </div>
                    </button>
                    <button onClick={exportToCSV} className='text-gray-500 font-semibold'>
                        <div className='relative h-6 w-6 sm:h-6 sm:w-6 flex justify-center items-center'>
                            <Image
                                src={csv}
                                
                                alt='pdft'
                            />
                        </div> 
                    </button> 
                </div>
                <div className='relative'> 
                    <input
                        id="search"
                        name="email"
                        type="text"
                        className='peer h-10 w-full border-b-2 border-[#FB9678] text-[#FB9678] placeholder-transparent focus:outline-none bg-gray-100
                        focus:border-[#FB9678]'
                        placeholder=""
                    />
                    <label for='search' className='absolute peer-focus:-top-3.5 peer-focus:text-[#FB9678] peer-focus:text-md transition-all left-1 -top-2 text-[#FB9678] text-md peer-placeholder-shown:text-[#FB9678] peer-placeholder-shown:top-2'>Search</label>
                </div>
            </div>
        </div>
        <div className='mt-8 overflow-scroll w-full  lg:overflow-hidden'>
            {/* <EmployeesTable employeeList={employees} /> */}
            {/* <Pagination getPageNumbers={getPageNumbers} changePageNumber={changePageNumber}/> */}

        </div>

        
    </div>
  )
}

export default Employees