import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ui/mode-toggler'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function openPDF() {
    window.open('/JoonasVaija_CV.pdf') || window.location.replace('/JoonasVaija_CV.pdf');
}

export default function Nav() {
    return (
        <div className="top-0 fixed flex flex-row justify-end gap-6 items-center bg-gradient-to-b from-background to-transparent w-screen px-4 z-20 xl:flex xl:flex-col xl:h-screen xl:w-auto xl:justify-start xl:top-0 xl:pt-4 xl:bg-gradient-to-b xl:from-transparent xl:to-transparent">
            <div className='flex mr-auto'>
                <Link href=''>
                    <Image
                        src="/JVLOGOUUSI.svg"
                        alt="JV-Logo"
                        className="dark:invert scale-75 xl:scale-100"
                        width={75}
                        height={50}
                        priority
                    />
                </Link>
            </div>
            <a href='https://www.linkedin.com/in/joonas-vaija/' target='_blank' className='xl:pt-12'>
                <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    className="dark:invert scale-75 xl:scale-100"
                    width={40}
                    height={40}
                    priority
                />
            </a>

                
                <AlertDialog>
                    <AlertDialogTrigger><Image
                    src="/file_on.svg"
                    alt="resume"
                    className="dark:invert scale-75 xl:scale-100"
                    width={40}
                    height={40}
                    priority
                /></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Do you want to open my resume?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Resume will open in a new tab.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={openPDF}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            
            <ModeToggle />
        </div>
    )
}
