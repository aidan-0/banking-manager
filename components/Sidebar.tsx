"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'


const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();

  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image 
                    src="/icons/logo.svg" 
                    alt="Logo" 
                    width={34}
                    height={34}
                    className='size-[24px] max-xl:size-14' />
            <h1 className='sidebar-logo'>Horizon</h1>
            </Link>

            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return (
                    // cn is a utility function that helps to conditionally apply classes. the first param is 'sidebar-link' which is the styling which will always be applied.
                    // the second param is an object with the key being the class name and the value being the condition that will determine if the class is applied.
                    // if the condition is true, the class is applied, if false, it is not applied.
                    // in this case, if the pathname is equal to the item.route or the pathname starts with the item.route, the class 'bg-bank-gradient' will be applied.
                    // this will give the active link a gradient background color.
                <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                    <div className='relative size-6'>
                        <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            // In this one there is no first param so it is checking if the isActive is true, if it is, it will apply the class 'brightness-3 invert-0'
                            className={cn({'brightness-[3] invert-0': isActive})}
                            />
                    </div>
                    <p className={cn('sidebar-label', {'!text-white': isActive})}>{item.label}</p>
                </Link>
                )
            })}

            USER
        </nav>

        <Footer user={user} type="desktop"/>
    </section>
  )
}

export default Sidebar