import React from 'react'

const Pagination = ({getPageNumbers, changePageNumber}) => {
  return (
    <div>
        {getPageNumbers && getPageNumbers.map((getSingleNumber)=>(
            <button key={getSingleNumber} onClick={()=>changePageNumber(getSingleNumber)}>{getSingleNumber}</button>
        ))}
    </div>
  )
}

export default Pagination