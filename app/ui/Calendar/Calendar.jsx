'use client'
import React, { useState } from 'react';
import { getDays, daysOfTheWeek, months } from '../data/getCalendarDays';
import dayjs from 'dayjs';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { cn } from './UtilityFile';

const Calendar = () => {
    const currentDate = dayjs();
    const [currentDateState, setCurrentDateState] = useState(currentDate);

    const handlePreviousYear = () => {
        setCurrentDateState(currentDateState.subtract(1, 'year'));
    };

    const handleNextYear = () => {
        setCurrentDateState(currentDateState.add(1, 'year'));
    };

    return (
        <div className="flex flex-col items-center">
            <div className='flex justify-between items-center bg-gray-200 py-5 px-10 rounded-t-md w-full'>
                <div className="flex gap-10 items-center">
                    <IoMdArrowDropleft
                        className="w-5 h-5 cursor-pointer text-2xl text-[#FB9678] hover:scale-105 transition-all"
                        onClick={handlePreviousYear}
                    />
                    <h1 className='font-semibold text-2xl text-[#FB9678] '>{currentDateState.year()}</h1>
                    <IoMdArrowDropright
                        className="w-5 h-5 cursor-pointer text-2xl text-[#FB9678] hover:scale-105 transition-all"
                        onClick={handleNextYear}
                    />
                </div>
            </div>
            <section className="mt-8 md:flex mb-2 flex-wrap  gap-8 justify-between  text-center">
                    {Array.from({ length: 12 }, (_, monthIndex) => {
                        const currentMonthDate = currentDateState.month(monthIndex);
                        return (
                            <div key={monthIndex} className="bg-white p-4 md:p-8 rounded-md shadow-lg text-center mb-4 flex-auto">
                                <h2 className="text-center font-semibold ">{months[monthIndex]}</h2>
                                <div className="grid grid-cols-7  ">
                                    {daysOfTheWeek.map((day, index) => (
                                        <div key={index} className="h-10 font-bold grid place-content-center text-[#FB9678]">
                                            {day}
                                        </div>
                                    ))}
                                    {getDays(currentMonthDate.month(), currentMonthDate.year()).map(({ date, currentMonth, today }, index) => (
                                        <div key={index} className="h-8 grid place-content-center ">
                                            <h1
                                                className={cn(
                                                    !currentMonth && "text-slate-400",
                                                    today && "font-semibold text-[#FB9678] ",
                                                    "h-8 w-16 p-4 grid place-content-center font rounded-full cursor-pointer  dark:hover:bg-slate-500"
                                                )}
                                            >
                                                {date.date()}{" "}
                                            </h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                
            </section>
        </div>
    );
};

export default Calendar;



