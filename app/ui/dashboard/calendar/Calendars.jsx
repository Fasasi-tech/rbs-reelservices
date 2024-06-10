'use state'
import React, {useEffect, useState, useRef} from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Calendars = ({calendar, setCalendar, handleSelect}) => {

     // open close
  const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // set current date on component load
        setCalendar(format(new Date(), 'MM/dd/yyyy'))
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
      }, [])

       // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className='inline-block relative '>
        <input 
            value={calendar}
            readOnly
            onClick={() => setOpen((open) => !open)}
            className='text-[22px] pt-[5px] pr-[8px] pb-[4px] pl-[8px]   border-[#FB9678] p-2 w-full outline-none border-2 border-solid rounded-lg  text-[#FB9678] h-12 bg-none '
        />

        <div ref={refOne} className='text-[#FB9678]  '>
            {open && (
            <Calendar
                date={new Date()}
                onChange={handleSelect}
                className="absolute left-[50%] translate-x-[-50%] text-[#FB9678] "
            />
            )}
        </div>
    </div>
  )
}

export default Calendars