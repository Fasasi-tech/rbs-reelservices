import React from 'react'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { IconType } from "react-icons";
import { Button } from '@/components/ui/button';
const DialogWrapper = ({
    children,
    btnTitle,
    title,
    descr,
    icon: Icon,
    isBtn,
    open,
    setOpen
  }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger  asChild>{isBtn ? <Button variant='secondary' >{btnTitle}</Button> : Icon && <Icon className="text-red-600 cursor-pointer" size={24} />}</DialogTrigger>
    <DialogContent className="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle  className="text-xl font-bold text-orange-400">{title}</DialogTitle>
        <DialogDescription>
            {descr}
        </DialogDescription>
      </DialogHeader>
        {children}
    </DialogContent>
  </Dialog>
  )
}

export default DialogWrapper