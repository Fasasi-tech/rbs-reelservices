import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import LoginForm from '../../Login/LoginForm';

const Popup = () => {
  return (
    <div>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='secondary'>
                    <FaRegUser />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-60 absolute top-4 -right-8'>
                <LoginForm />
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default Popup