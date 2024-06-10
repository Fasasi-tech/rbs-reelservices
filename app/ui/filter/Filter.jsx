'use client'
import React, { useState, useEffect } from 'react'
import Select from 'react-select';



const Filter = () => {
    const [genreFilter, setGenreFilter] = useState('')
    const [selectedOptions, setSelectedOptions] = useState(() => {
        const savedOptions = localStorage.getItem('selectedOptions');
        return savedOptions ? JSON.parse(savedOptions) : [];
    });
    const [options, setOptions] = useState([])
    const [optionsGender, setOptionsGender] = useState([])
    const [selectedOptionsGender, setSelectedOptionsGender] = useState(() => {
        const saved = localStorage.getItem('selectedOptionsGender')
        const initialValueGender = JSON.parse(saved)
        return saved ? initialValueGender : []
    }, [])
    // const [optionsGender, setOptionsGender] = useState(() => {
    //     const saved = localStorage.getItem('selectedOptionsGender')
    // },[])
    const [optionsDept, setOptionsDept] = useState([])
    const [selectedOptionsTeam, setSelectedOptionsTeam] = useState(() =>{
        const saved = localStorage.getItem("selectedOptionsTeam")
        const initialValue= JSON.parse(saved)
        return saved ? initialValue : []
    })

    const [optionsCountry, setOptionsCountry] = useState([])
    const [selectedOptionsCountry, setSelectedOptionsCountry] = useState(() =>{
        const saved = localStorage.getItem("selectedOptionsCountry")
        const initialValueCountry = JSON.parse(saved);
        return saved ? initialValueCountry : []
    })
    

    useEffect(() => {
        const fetchedOptions = [
            {value:'ade', label: 'IT' },
            {value:'fola', label: 'Admin' },
            {value:'dara', label: 'Finance' },
           
        ]

        setOptions(fetchedOptions);

        
        
    }, [])

    useEffect(() => {
        const fetchedOptionsDept = [
            {value:'adex', label: 'Team 1' },
            {value:'folat', label: 'Team 2' },
            {value:'light', label: 'Team 3' },
            {value:'bangladesh', label: 'Team 4' }
        ]
        setOptionsDept(fetchedOptionsDept)
    }, [])


useEffect(() => {
    const fetchedOptionsCountry = [
        {value: 'Afghanistan', label: 'Afghanistan'},
        {value: 'Canada', label: 'Canada'},
        {value: 'Nigeria', label: 'Nigeria'}
    ]

    setOptionsCountry(fetchedOptionsCountry)
}, [])

useEffect(() => {
    const fetchedOptionsGender = [
        {value: 'M', label: 'Male'},
        {value: 'F', label: 'Female'}
    ]

    setOptionsGender(fetchedOptionsGender)
}, [])

    useEffect(() => {
        localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    }, [selectedOptions]);

    useEffect (()=>{
        localStorage.setItem('selectedOptionsTeam', JSON.stringify(selectedOptionsTeam))
    }, [selectedOptionsTeam])

    useEffect(() => {
        localStorage.setItem("selectedOptionsCountry", JSON.stringify(selectedOptionsCountry))
    }, [selectedOptionsCountry])

    useEffect(() => {
        localStorage.setItem('selectedOptionsGender', JSON.stringify(selectedOptionsGender))
    }, [selectedOptionsGender])
    
    const handleChangeGender = (selectedGender) => {
        setSelectedOptionsGender(selectedGender)
    }

    const handleChange = (selected) => {
        setSelectedOptions(selected)
    }

    const handleChangeTeams = (selectedTeam) => {
        setSelectedOptionsTeam(selectedTeam)
    }

    const handleChangeCountry = (selectedCountry) => {
        setSelectedOptionsCountry(selectedCountry)
    }

   

    // useEffect(() => {
    //     const selectedOptionsTeam = JSON.parse(localStorage.getItem('selectedOptionsTeam'))

    //     if(selectedOptionsTeam){
    //         setSelectedOptionsTeam(selectedOptionsTeam)
    //     }
    // }, [])

  return (
    <div className=''>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 lg:w-1/4 px-2'>
           <Select
           id='Department'
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                isMulti={true}
                placeholder="Department" // Placeholder text
                className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:ring-gray-300 focus:border-gray-300 outline-none"
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: '',
                        '&:hover': {
                            borderColor: '',
                        },
                        boxShadow: state.isFocused ? '' : null,
                        maxWidth: '100%'
                    }),
                }}
           />
        </div> 
        <div className='w-full md:w-1/2 lg:w-1/4 px-2'>
           <Select
           id='select'
                options={optionsDept}
                value={selectedOptionsTeam}
                onChange={handleChangeTeams}
                isMulti={true}
                placeholder="Team" // Placeholder text
                className="mt-1 block  rounded-md border-gray-300 shadow-sm"
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: '',
                        '&:hover': {
                            borderColor: '',
                        },
                        boxShadow: state.isFocused ? '' : null,
                        maxWidth: '100%'
                    }),
                }}
           />
        </div> 
        <div className='w-full md:w-1/2 lg:w-1/4 px-2'>
           <Select
           id='select'
                options={optionsCountry}
                value={selectedOptionsCountry}
                onChange={handleChangeCountry}
                isMulti={true}
                placeholder="Country" // Placeholder text
                className="mt-1 block  rounded-md border-gray-300 shadow-sm"
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: '',
                        '&:hover': {
                            borderColor: '',
                        },
                        boxShadow: state.isFocused ? '' : null,
                        maxWidth: '100%'
                    }),
                }}
           />
        </div> 
        <div className='w-full md:w-1/2 lg:w-1/4 px-2'>
        <Select
           id='select'
                options={optionsGender}
                value={selectedOptionsGender}
                onChange={handleChangeGender}
                isMulti={true}
                placeholder="Gender" // Placeholder text
                className="mt-1 block  rounded-md border-gray-300 shadow-sm"
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: '',
                        '&:hover': {
                            borderColor: '',
                        },
                        boxShadow: state.isFocused ? '' : null,
                        maxWidth: '100%'
                    }),
                }}
           />
        </div> 
    </div>
    </div>
  )
}

export default Filter